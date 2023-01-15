import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand-div">
        <Link to="/" className="brand">
          Leandro Carriego
        </Link>
      </div>
      <ul className="navbar-nav nav-desktop">
        <li className="nav-item">
          <a className="nav-link" href="#selectedProjects">
            Trabajos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contacto
          </a>
        </li>
        <li className="nav-item">
          <button className="cv">
            <a
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

      <div className="menu-mobile">
        {open ? (
          <div className="menu-open">
            <i
              onClick={() => {
                setOpen(false);
              }}
              className="bi bi-x"
            ></i>
            <ul className="navbar-nav nav-mobile">
              <li className="nav-item">
                <a className="link" href="#selectedProjects">
                  Trabajos
                </a>
              </li>
              <li className="nav-item">
                <a className="link" href="#contact">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <button className="cv">
                  <a
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
        ) : (
          <i
            onClick={() => {
              setOpen(true);
            }}
            className="bi bi-filter-right"
          ></i>
        )}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
