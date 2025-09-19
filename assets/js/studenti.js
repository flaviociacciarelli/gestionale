fetch("http://localhost:3000/api/studenti/")
  .then(response => {
        if (!response.ok) {
          throw new Error('Errore nel recupero dei dati');
        }
    return response.json();

  })
  .then((studenti) => {
    const tabella = document.getElementById("tabella");
    let maschi = [];
    let femmine = [];
    let altro = [];

    studenti.forEach((studente) => {
      const genere = studente.infoPersonali.genere?.toLowerCase();

      if (genere === "m") {
        maschi.push(studente);
      } else if (genere === "f") {
        femmine.push(studente);
      } else {
        altro.push(studente);
      }

      // Aggiunta riga alla tabella
      const rowTable = `
        <tr>
            <td><a href="http://localhost:3000/studente/${studente.id}" target="_blank" class="id-link">${studente.id}</a></td>
            <td>${studente.infoPersonali.nome}</td>
            <td>${studente.infoPersonali.cognome}</td>
            <td>${studente.infoPersonali.infoNascita.dataNascita}</td>
            <td>${studente.infoPersonali.email}</td>
            <td>${studente.infoPersonali.tel}</td>
            <td>${studente.corso}</td>
            <td><a class="btn invia-form btn-altro btn-table" href="http://localhost:3000/studente/${studente.id}" target="_blank" rel="noopener noreferrer">Altro</a></td>
        </tr>`;

      tabella.innerHTML += rowTable;
    });

    // Calcoli età medie
    const etaMediaTotale = calcolaEtaMedia(studenti);
    const etaMediaFemmine = calcolaEtaMedia(femmine);
    const etaMediaMaschi = calcolaEtaMedia(maschi);
    const etaMediaAltro = calcolaEtaMedia(altro);

    console.log("Totale studenti:", studenti.length);
    console.log("Maschi:", maschi.length);
    console.log("Femmine:", femmine.length);
    console.log("Altro/non specificato:", altro.length);
    console.log("Età media generale:", etaMediaTotale);
    console.log("Età media studentesse:", etaMediaFemmine);
    console.log("Età media studenti maschi:", etaMediaMaschi);
    console.log("Età media studenti altro:", etaMediaAltro);

  }) 

  .catch((error) => {
    document.body.innerHTML += `<span class="text-danger">${error.message}</span>`;
    console.error("Errore fetch:", error);
  });

// Funzione per calcolare età media
function calcolaEtaMedia(studenti) {
  const oggi = new Date();
  let sommaEta = 0;
  let totaleStudenti = 0;

  studenti.forEach((studente) => {
    const dataNascitaSt = studente.infoPersonali.infoNascita.dataNascita;
    const dataNascita = new Date(dataNascitaSt);

    let eta = oggi.getFullYear() - dataNascita.getFullYear();
    const meseOggi = oggi.getMonth();
    const giornoOggi = oggi.getDate();
    const meseNascita = dataNascita.getMonth();
    const giornoNascita = dataNascita.getDate();

    if (
      meseOggi < meseNascita ||
      (meseOggi === meseNascita && giornoOggi < giornoNascita)
    ) {
      eta--;
    }

    if (!isNaN(eta)) {
      sommaEta += eta;
      totaleStudenti++;
    }
  });

  return totaleStudenti > 0 ? (sommaEta / totaleStudenti).toFixed(2) : "N/D";
}




