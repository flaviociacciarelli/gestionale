function addFavicon() {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = '/asset/img/favicon.png';
    document.head.appendChild(link);
}

let header = `
      <div id="radiusDinamico" class="container-header">
        <div class="row h-100">
          <div class="col-5 d-flex justify-content-start align-items-center">
            <div
              id="ruoli"
              class="container"
              role="group"
              aria-label="Seleziona ruolo"
            >
              <button
                class="roleBtn"
                data-role="Stud"
                aria-controls="azioni-Stud"
              >
                Studente
              </button>
              <button
                class="roleBtn"
                data-role="Doc"
                aria-controls="azioni-Doc"
              >
                Docente
              </button>
              <button
                class="roleBtn"
                data-role="Ammin"
                aria-controls="azioni-Ammin"
              >
                Amministrativo
              </button>
            </div>
          </div>
          <div class="col-2 d-flex justify-content-center align-items-center">
            <svg
              width="431"
              height="388"
              viewBox="0 0 431 388"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M431 388H271.382C270.682 358.013 193.622 273.248 191.623 259.054C122.058 260.254 149.344 388 141.748 388H2.11958C-6.97582 292.74 10.8151 207.676 102.468 164.194L2.11958 1.16249H146.746L241.497 120.212C289.772 72.233 276.779 5.76059 281.377 1.06259C283.775 -1.33641 339.247 1.06259 351.241 1.16249C371.131 1.36239 391.22 0.862591 411.11 1.06259C415.708 80.129 417.307 154.598 341.246 199.479C340.147 206.176 324.155 217.172 322.955 225.868C320.257 246.859 421.505 354.814 431 388Z"
                fill="#20B7CA"
              />
            </svg>
          </div>
          <div class="col-5 d-flex justify-content-center align-items-center">
            <ul class="list-container">
              <li>
                <a class="btn" href="#" role="button">SEARCH</a>
              </li>
              <li>
                <a class="btn" href="#" role="button">LOGOUT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div
        class="container-menu d-flex flex-column justify-content-center"
      >
        <!-- Bottoni AZIONE (tutti nascosti all'avvio con hidden) -->
        <div
          id="azioni-Stud"
          class="container"
          role="group"
          aria-label="Azioni Studente"
          hidden
        >
          <button  class="actionBtn"><a href="http://localhost:3000/aggiungiStudente">Inserisci Studente</button>
          <button  class="actionBtn"><a href="http://localhost:3000/visualizzaStudenti">Visualizza Studenti</a></button>
          <button class="actionBtn"><a href="http://localhost:3000/statStudenti">Statistica Studente</button>
          <button class="backBtn">⬅ Indietro</button>
        </div>

        <div
          id="azioni-Doc"
          class="container"
          role="group"
          aria-label="Azioni Docente"
          hidden
        >
          <button class="actionBtn">Inserisci Docente</button>
          <button class="actionBtn">Visualizza Docenti</button>
          <button class="actionBtn">Modifica Docente</button>
          <button class="backBtn">⬅ Indietro</button>
        </div>

        <div
          id="azioni-Ammin"
          class="container"
          role="group"
          aria-label="Azioni Amministrativo"
          hidden
        >
          <button class="actionBtn">Inserisci Amministrativo</button>
          <button class="actionBtn">Visualizza Amministrativi</button>
          <button class="actionBtn">Modifica Amministrativo</button>
          <button class="backBtn">⬅ Indietro</button>
        </div>
       
      </div>`;
let siteHeater = document.getElementById("site-header");
siteHeater.innerHTML = header;

let footer = `
      <footer class="site-footer">
      <div class="container-footer">
        <p>
          Sede legale: Via del Paradiso, 4 - 01100 Viterbo (VT) C.F. 90097600564
          P.IVA IT02274260567 - Powered by
          <a href="indirizzo">valeriocorda.it</a>
        </p>
      </div>
    </footer>`;
let siteFooter = document.getElementById("site-footer");
siteFooter.innerHTML = footer;

document.addEventListener("DOMContentLoaded", () => {
  const ruoli = document.getElementById("ruoli");
  const roleButtons = ruoli.querySelectorAll(".roleBtn");
  const actionGroups = document.querySelectorAll('[id^="azioni-"]');

  function hideAllActions() {
    actionGroups.forEach((g) => (g.hidden = true));
  }

  function clearActive(container) {
    container
      .querySelectorAll(".active")
      .forEach((b) => b.classList.remove("active"));
  }

  const containerHeader = document.querySelector('.container-header');
const containerMenu = document.querySelector('.container-menu');
  containerHeader.addEventListener("click", ()=>{
    containerHeader.classList.add("radiusZero"); 
    
  })
const btnBack = document.querySelector('backBtn');
btnBack.addEventListener("click", ()=> {
containerHeader.classList.remove("radiusZero");
});

  // Click sui bottoni RUOLO
  roleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const role = btn.dataset.role;
      const group = document.getElementById(`azioni-${role}`);
      //document.getElementById("radiusDinamico").className = "container-header radiusZero"; 

      // Evidenzia ruolo selezionato
      clearActive(ruoli);
      btn.classList.add("active");

      // Mostra SOLO il gruppo azioni del ruolo selezionato
      hideAllActions();
      group.hidden = false;

      // Reset evidenziazione delle azioni in quel gruppo
      clearActive(group);
    });
  });

  // Evidenziazione bottoni AZIONE
  actionGroups.forEach((group) => {
    group.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("actionBtn")) {
        clearActive(group);
        target.classList.add("active");
      }
    });
  });

  // Bottone INDIETRO per ogni gruppo azioni
  document.querySelectorAll(".backBtn").forEach((back) => {
    back.addEventListener("click", () => {
      hideAllActions();
      clearActive(ruoli);
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const roleButtons = document.querySelectorAll(".roleBtn");
  const actionContainers = document.querySelectorAll("[id^='azioni-']");
  const backButtons = document.querySelectorAll(".backBtn");
  //const contenitoreDiv = document.getElementById("contenitore-div");

  // Nasconde tutti i contenitori azione
  function hideAllActions() {
    actionContainers.forEach(container => container.hidden = true);
  }

  // Mostra azioni del ruolo scelto
  roleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const role = button.dataset.role;
      hideAllActions();
      document.getElementById(`azioni-${role}`).hidden = false;
      contenitoreDiv.innerHTML = ""; 
      // reset
    });
  });

  // Torna indietro
  backButtons.forEach(button => {
    button.addEventListener("click", () => {
      hideAllActions();
      //contenitoreDiv.innerHTML = "";
    });
  });

  // Carica pagina HTML dentro contenitore-div
  /* const actionButtons = document.querySelectorAll(".actionBtn");
  actionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      
      
      let fileName = btn.textContent.replace(/\s+/g, "_").toLowerCase() + ".html";

      fetch(`./${fileName}`)
        .then(response => {
          if (!response.ok) throw new Error("Errore nel caricamento della pagina");
          return response.text();
        })
        .then(html => {
          contenitoreDiv.innerHTML = html;
        })
        .catch(err => {
          contenitoreDiv.innerHTML = `<p style="color:red">${err.message}</p>`;
        }); 
    });
  });*/
});
