function addFavicon() {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = '/asset/img/favicon.png';
    document.head.appendChild(link);
}

let header = `
      <div class="container-header">
        <div class="row h-100">
          <div class="col-5 d-flex justify-content-start align-items-center">
            <ul class="list-container">
              <li>
                <button class="btn-stud" href="#" role="link" id="apriFormStud">Studente</button>
              </li>
              <li>
                <button class="btn-stud" href="#" role="link" id="apriFormDoc">Docente</button>
              </li>
              <li>
                <button class="btn-stud" href="#" role="link" id="apriFormAmmin">Amministrativo</button>
              </li>
            </ul>
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