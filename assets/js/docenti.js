fetch("http://localhost:3000/api/docenti")
  .then((response) => {
    if (!response.ok) {
      throw new Error("non sono riuscito a recuperare i dati");
    }
    return response.json();
  })
  .then((docenti) => {
    const table = document.getElementById("tabellaDocenti");

    let maschi = [];
    let femmine = [];
    let altro = [];

    docenti.forEach((docente) => {

      const sesso = docente.infoPersonali.sesso.toLowerCase();
      if (sesso === "m") {
        maschi ++;
      } else if (sesso === "f") {
        femmine ++;
      } else {
        altro ++;
      }

      const row = `
      <td class="tdNome">${docente.infoPersonali.nome}</td>
      <td id="striped">${docente.infoPersonali.cognome}</td>
    <td>${docente.infoPersonali.sesso}</td>
      <td id="striped">${docente.infoPersonali.email}</td>
      <td>${docente.infoPersonali.telefono}</td>
      <td id="striped">${docente.infoPersonali.dataNascita}</td>
      <td>${docente.infoPersonali.cf}</td>
      <td id="striped">${docente.lavoro.materiaInsegnata}</td>
      <td>${docente.lavoro.dataAssunzione}</td>
      <td><a class="btn btn-primary btn-table" href="http://localhost:3000/docente/${docente.id}" target="_blank" rel="noopener noreferrer">Altro</a></td>
      `;

      tabellaDocenti.innerHTML += row;
    });

    // Pie Chart (dopo il conteggio)
     const ctxGender = document.getElementById("genderChart").getContext("2d");
    new Chart(ctxGender, {
      type: "pie",
      data: {
        labels: ["Maschi", "Femmine", "Altro"],
        datasets: [
          {
            data: [maschi, femmine, altro],
            backgroundColor: ["#36A2EB", "#FF6384", "#5D5D5D"],
            borderColor: "#fff",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { position: "bottom" } },
      },
    });
  })
  .catch((error) => {
    document.body.innerHTML += `<p style="color:red;">${error.message}</p>`;
    console.error("errore nella fetch", error);
  });

  function calcolaEtaMedia(docenti) {
  const oggi = new Date();
  let sommaEta = 0;
  let totaleDocenti = 0;

  docenti.forEach((docente) => {
    const dataNascitaDoc = docente.infoPersonali.infoNascita.dataNascita;
    const dataNascita = new Date(dataNascitaDoc);

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
      totaleDocenti++;
    }
  });

  return totaleDocenti > 0 ? (sommaEta / totaleDocenti).toFixed(2) : "N/D";
}
