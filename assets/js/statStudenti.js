fetch("http://localhost:3000/api/studenti/")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Errore nel recupero dei dati");
    }
    return response.json();
  })
  .then((studenti) => {
    
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

  // Pie Chart (dopo il conteggio)
    const ctxGender = document.getElementById("genderChart").getContext("2d");
    new Chart(ctxGender, {
      type: "pie",
      data: {
        labels: ["Maschi", "Femmine", "Altro"],
        datasets: [
          {
            data: [maschi.length, femmine.length, altro.length],
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

  // Dati per il grafico
    const datiGrafico = {
      labels: ['Maschi', 'Femmine', 'Altro', 'Totale'],
      datasets: [
        {

          data: [etaMediaMaschi, etaMediaFemmine, etaMediaAltro, etaMediaTotale],
            label: false,
            backgroundColor: ["rgba(54, 162, 235, 0.5)", "rgba(255, 99, 132, 0.5)", "rgba(93, 93, 93, 0.5)", "rgba(191, 255, 0, 0.5)"],
            borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)", "rgba(93, 93, 93, 1)", "rgba(191, 255, 0, 1)"],
            borderWidth: 2 ,  
            borderRadius: 10,
            borderSkipped: false,
          
        }
      ]
    };

    // Configurazione
    const configGrafico = {
      type: 'bar',
      data: datiGrafico,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Età media studenti per genere'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            suggestedMin: 10,
            suggestedMax: 30
          }
        }
      }
    };

    // Render grafico
    const ctx = document.getElementById('graficoEta').getContext('2d');
    new Chart(ctx, configGrafico);
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




