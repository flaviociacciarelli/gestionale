
# 📘 Documentazione Progetto Gestionale Studenti/Docenti

## 🧾 Introduzione

Questo progetto è un gestionale semplice per studenti e docenti realizzato in Node.js con Express e interfaccia HTML statica. È pensato per esercitazioni scolastiche o corsi base di sviluppo web full-stack.

---

## 🗂️ Struttura delle cartelle

```
gestionale/
│
├── login.html                    # Pagina iniziale (login)
├── aggiungiStudenti.html        # Form per aggiungere studenti
├── vediStudenti.html            # Elenco studenti
├── studente.html                # Vista singolo studente
├── inserimentoDocenti.html      # Form per aggiungere docenti
├── docenti.html                 # Elenco docenti
├── docente.html                 # Vista singolo docente
│
├── server.js                    # File principale del server Express
├── package.json                 # Dipendenze e script del progetto
└── README.md                    # Breve spiegazione iniziale
```

---

## ▶️ Istruzioni per l'avvio

Assicurati di avere installato **Node.js**. Poi:

```bash
cd gestionale
npm install
node server.js
```

Il server sarà disponibile su `http://localhost:3000`

---

## ⚙️ Funzionalità principali

- 👤 Aggiunta, visualizzazione e modifica di studenti
- 👨‍🏫 Aggiunta e visualizzazione di docenti
- 📄 Salvataggio dati in file JSON (`assets/db`)
- 🌐 Interfaccia HTML semplice (no login reale implementato)

---

## 🔗 Viste HTML

| URL                      | Pagina HTML                  | Descrizione |
|--------------------------|------------------------------|-------------|
| `/`                      | login.html                   | Pagina iniziale |
| `/cerca`                 | ricerca.html (da creare)     | Ricerca (placeholder) |
| `/aggiungiStudente`     | aggiungiStudenti.html        | Form aggiunta studente |
| `/visualizzaStudenti`   | vediStudenti.html            | Lista studenti |
| `/studente/:id`         | studente.html                | Dettaglio studente |
| `/aggiungiDocente`      | inserimentoDocenti.html      | Form aggiunta docente |
| `/visualizzaDocenti`    | docenti.html                 | Lista docenti |
| `/docente/:id`          | docente.html                 | Dettaglio docente |

---

## 📡 API Endpoint

| Metodo | Endpoint               | Descrizione |
|--------|------------------------|-------------|
| GET    | `/api/studenti`        | Ottiene lista studenti |
| POST   | `/api/studenti`        | Aggiunge nuovo studente |
| GET    | `/api/studente/:id`    | Ottiene dati singolo studente |
| PUT    | `/api/studente/:id`    | Aggiorna dati studente |
| GET    | `/api/docenti`         | Ottiene lista docenti |
| POST   | `/api/docenti`         | Aggiunge nuovo docente |
| GET    | `/api/docente/:id`     | Ottiene dati singolo docente |

---

## 🧩 Come Estendere il Progetto

- ✅ Implementare autenticazione reale (es. JWT o sessioni)
- ✅ Aggiungere eliminazione (`DELETE`)
- ✅ Introdurre un database (es. MongoDB o SQLite)
- ✅ Aggiungere validazione dei campi

---

## 👨‍🏫 Suggerimenti Didattici

- Stimola gli studenti a:
  - leggere e modificare il backend
  - aggiungere validazioni lato client
  - usare DevTools per ispezionare chiamate API
  - esercitarsi con il file system e manipolazione JSON

---

Happy Coding! 💻
