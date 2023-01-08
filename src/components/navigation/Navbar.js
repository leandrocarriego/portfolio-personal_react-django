import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header sticky-top">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Leandro Carriego
          </Link>
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
                <a
                  className="nav-link"
                  href="#selectedProjects"
                >
                  Trabajos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                >
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <button>
                  <a
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    href="./assets/downloads/cv_leandro_carriego.pdf"
                  >
                    Descargar CV
                  </a>
                </button>
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
