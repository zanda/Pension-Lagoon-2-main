import * as React from 'react';
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid ">
      <a className="navbar-brand mt-4" href="/">
        <img
          width="50"
          height="50"
          src="
        https://media.discordapp.net/attachments/1047585005313990716/1048384424162644099/2c23d4f0-4c74-43bc-9a7d-5b260be0d5bf.png
        
        
        "
          className="rounded-circle mx-5"
        />
        <p className="mt-2 fs-4">LAGOON LODGE</p>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expandeed="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav fs-4">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/bungalows">
              Bungalows & Chambres
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/activites">
              Activités
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/restaurant">
              Restaurant
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/evenements">
              Évènements
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
