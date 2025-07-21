fetch("http://localhost:3000/api/studenti/")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Errore nel recupero dei dati");
    }
    return response.json();
  })
  .then((studenti) => {
    const tabella = document.getElementById("tabella");

    studenti.forEach((studente) => {
      console.log(
        studente.infoPersonali.CF,
        studente.infoPersonali.nome,
        studente.infoPersonali.cognome,
        studente.infoPersonali.infoNascita.dataNascita,
        studente.infoPersonali.email,
        studente.infoPersonali.tel,
        studente.corso,
        studente.note
      );

      const rowTable = `
        <tr>
            <td>${studente.infoPersonali.CF}</td>
            <td>${studente.infoPersonali.nome}</td>
            <td>${studente.infoPersonali.cognome}</td>
            <td>${studente.infoPersonali.infoNascita.dataNascita}</td>
            <td>${studente.infoPersonali.email}</td>
            <td>${studente.infoPersonali.tel}</td>
            <td>${studente.corso}</td>
            <td>${studente.note}</td>
            <td><a class="btn btn-primary" href="http://localhost:3000/studente/${studente.id}" target="_blank" rel="noopener noreferrer">Altro</a></td>
        </tr>`;
      
      tabella.innerHTML += rowTable;
    });

    // Calcola e stampa età media
    const etaMedia = calcolaEtaMedia(studenti);
    console.log("Età media:", etaMedia);
  })
  .catch((error) => {
    document.body.innerHTML += `<span class="text-danger">${error.message}</span>`;
    console.error("Errore fetch:", error);
  });

// Funzione per calcolare età media
function calcolaEtaMedia(studenti) {
  const oggi = new Date("2025-07-14"); 
  let sommaEta = 0;
  let totaleStudenti = 0;

  studenti.forEach((studente) => {
    const dataNascitaStr = studente.infoPersonali.infoNascita.dataNascita;
    const dataNascita = new Date(dataNascitaStr);
    
    let eta = oggi.getFullYear() - dataNascita.getFullYear();
    const meseOggi = oggi.getMonth();
    const giornoOggi = oggi.getDate();
    const meseNascita = dataNascita.getMonth();
    const giornoNascita = dataNascita.getDate();

    if (meseOggi < meseNascita || (meseOggi === meseNascita && giornoOggi < giornoNascita)) {
      eta--;
    }

    if (!isNaN(eta)) {
      sommaEta += eta;
      totaleStudenti++;
    }
  });

  const etaMedia = totaleStudenti > 0 ? sommaEta / totaleStudenti : 0;
  return etaMedia.toFixed(2);
}
