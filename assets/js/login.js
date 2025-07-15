document.getElementById("loginForm").addEventListener("submit", function (e) {
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
});


