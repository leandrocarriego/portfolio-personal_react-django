import { connect } from "react-redux";

function Navbar() {
  return (
    <header className="header sticky-top">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="./index.html">
            Leandro Carriego
          </a>
          <button
            className="navbar-toggler navbar__button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="./pages/about.html">
                  Sobre mi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pages/clients.html">
                  Trabajos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pages/contact.html">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pages/contact.html">
                  Descargar CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
