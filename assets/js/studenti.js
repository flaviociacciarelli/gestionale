fetch("http://localhost:3000/api/studenti/")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Errore nel recupero dei dati");
    }

    return response.json();
  })

  .then((studenti) => {
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
      

      const tabella = document.getElementById("tabella");
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
        </tr> `;
        tabella.innerHTML += rowTable;
    });

    
  })

  .catch((error) => {
    document.bodyML += `<span class="text-danger">${error.message}</span>`;
    console.error("Errore fetch:", error);
  });

  function etaMediaStudenti(){
    anniStudente = dataCorrente().getFullYear() - dataNascitaValue.getFullYear()
    };
