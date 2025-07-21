document
  .getElementById("inserisciStudenti")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const now = new Date();
    const opzioni = {
      timeZone: 'Europe/Rome',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    const formatoLocale = new Intl.DateTimeFormat('it-IT', opzioni).formatToParts(now);
    const parti = Object.fromEntries(formatoLocale.map(({ type, value }) => [type, value]));

    const dataNascitaValue = document.getElementById('dataNascita').value;

    console.log("==================");
    console.log(dataNascitaValue);

    const dataNascitaValueGirata = giraData(dataNascitaValue);
    console.log("==================");
    console.log(dataNascitaValueGirata);

    function etaMediaStudenti(){
    const dataCorrente = new Date();
    console.log("==========");
    console.log(dataCorrente);
    console.log("==========");
    
    studenti.forEach(studente => {
    const anniStudente = dataCorrente - dataNascitaValue;
    console.log(anniStudente); 
    });
    
    
    };
    

    const dati = {

      infoPersonali: {
        nome: document.getElementById("nome_studente").value.trim(),
        cognome: document.getElementById("cognome_studente").value.trim(),
        CF: document.getElementById("CF").value.trim(),
        email: document.getElementById("mail_studente").value.trim(),
        tel: document.getElementById("telefono_studente").value.trim(),
        genere: document.getElementById("genere").value.trim(),
        infoNascita: {
          dataNascita: dataNascitaValue,
          dataNascitaGirata: dataNascitaValueGirata,
          luogoNascita: document.getElementById("luogoNascita").value.trim(),
          nazionalita: document.getElementById("nazionalita").value.trim(),
          /* dataNascitaGirata: giraData(dataNascita), */
        },
        residenza: {
          via: document.getElementById("via_studente").value.trim(),
          cap: document.getElementById("cap_studente").value.trim(),
          comune: document.getElementById("comune_studente").value.trim(),
          provincia: document.getElementById("provincia_studente").value.trim(),
          nazione: document.getElementById("nazione_studente").value.trim(),
        }
      },
      corso: document.getElementById("selectCorso").value.trim(),
      note: document.getElementById("note").value.trim(),
      timestamp: {
        dataAggiunta: `${parti.day}/${parti.month}/${parti.year}`,
        orarioAggiunta: `${parti.hour}:${parti.minute}`,
        timestampLocale: `${parti.day}-${parti.month}-${parti.year}_${parti.hour}-${parti.minute}`
      }

    };
    function giraData(data) {
    console.log(data);
    
    const [anno, mese, giorno] = data.split("-");
    console.log(data.split("-"));
    
    return `${giorno}-${mese}-${anno}`; 
    };


    inviaDatiAlServer(dati);
    /* if (validaDati(dati)) {
    } else {
      console.log("Errore: Dati non validi.");
    } */





    /*========== Validazione dati ==========*/

    /* function validaDati(dati) {
      let valido = true;
      if (dati.infoPersonali.tel.length !== 10 || !/^\d{10}$/.test(dati.infoPersonali.tel)) {
        alert("Telefono errato");
        valido = false;
      }

      if (dati.infoPersonali.CF.length !== 16) {
        alert("Codice Fiscale Errato");
        valido = false
      }
      return valido
    } */



    /*========= invia al form ========*/
    async function inviaDatiAlServer(dati) {
      console.log("Invio dei dati al server in corso...");

      try {
        const res = await fetch('/api/studenti');
        if (!res.ok) throw new Error("Impossibile leggere gli studenti esistenti");
        const studenti = await res.json();

        let id;
        const esisteID = (id) => studenti.some(u => u.id === id);

        // Genera un ID unico
        do {
          id = Math.random().toString(36).substring(2, 6);
        } while (esisteID(id));

        dati.id = id;

        const postResponse = await fetch('/api/studenti', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dati)
        });

        if (!postResponse.ok) {
          const errorText = await postResponse.text();
          throw new Error("Errore HTTP " + postResponse.status + ": " + errorText);
        }

        const data = await postResponse.json();
        console.log("Risposta del server (JSON Server):", data);
        alert("Dati inviati con successo al server locale!");
      } catch (error) {
        console.error("Errore durante l'invio:", error.message);
        alert("Errore durante l'invio dei dati: " + error.message);
      }
    }

  });   

/*========= GET ========*/
