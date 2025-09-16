/* document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("usernameLogin").value;
  const password = document.getElementById("passwordLogin").value;
  console.log(user, password);

  fetch("/assets/db/login.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Impossibile caricare gli utenti");
      }
      return response.json();
    })
    .then((data) => {
      const utente = data.utenti.find(
        (u) => u.username === user && u.password === password
      );
      console.log(utente);
      if (utente) {
        console.log("loggati");
      } else {
        console.log("non loggati");
      }
    });
}); */

/* document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("usernameLogin").value;
  const password = document.getElementById("passwordLogin").value;

  fetch("/assets/db/login.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Impossibile caricare gli utenti");
      }
      return response.json();
    })
    .then((data) => {
      const utente = data.utenti.find(
        (u) => u.username === user && u.password === password
      );

      if (utente) {
        console.log("Login riuscito");
        
        // Reindirizza alla Pagina Studente
        window.location.href = "/MenuIniziale.html";
      } else {
        alert("Credenziali errate");
      }
    })
    .catch((error) => {
      console.error("Errore:", error);
      alert("Errore nel caricamento dei dati");
    });
}); */


document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("usernameLogin").value.trim();
  const password = document.getElementById("passwordLogin").value.trim();
  const messaggioAlert = document.getElementById("alert_login");

  // Pulisco le classi precedenti
  messaggioAlert.classList.remove("alert-success", "alert-danger");

  fetch("/assets/db/login.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Impossibile caricare gli utenti");
      }
      return response.json();
    })
    .then((data) => {
      const utente = data.utenti.find(
        (u) => u.username === user && u.password === password
      );

      if (utente) {
        messaggioAlert.classList.add("alert-success");
        messaggioAlert.innerHTML = "✅ Benvenuto! Login riuscito!";
        console.log("Login riuscito");

        setTimeout(() => {
          // Reindirizza alla pagina MenuIniziale
          window.location.href = "MenuIniziale.html";
        }, 2000);
      } else {
        messaggioAlert.classList.add("alert-danger");
        messaggioAlert.innerHTML = "❌ Credenziali errate!";
      }
    })
    .catch((error) => {
      console.error("Errore:", error);
      messaggioAlert.classList.add("alert-danger");
      messaggioAlert.innerHTML = "⚠️ Errore nel caricamento dei dati!";
    });
});