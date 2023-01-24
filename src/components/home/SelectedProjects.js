import { Link } from "react-router-dom";

function SelectedProjects() {
  return (
    <section className="selected-projects" id="selectedProjects">
      <div>
        <h2>Proyectos seleccionados</h2>
        <div className="projects-container">
          <div className="project-card">
            <div className="img-container"></div>
            <div className="project-description">
              <h3>Portfolio</h3>
              
              <ul className="project-skills">
                <li>HTML5</li>
                <li>SCSS</li>
                <li>React.js</li>
                <li>Django - REST framework</li>
                <li>PostgresSQL</li>
              </ul>

              <ul className="project-links">
                <li>
                  <a
                    href="https://github.com/leandrocarriego/portfolio-personal_react-django"
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    aria-label="Demo Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="bi bi-box-arrow-up-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="project-card">
            <div className="img-container">
              <img src="https://media.licdn.com/dms/image/C4D22AQE6WE3jqYHOig/feedshare-shrink_2048_1536/0/1669938518793?e=1677110400&v=beta&t=jetGln2Wo2vkmKt3bUyHVcJuNYrXk5MMVzvvlzK3JS4" />
            </div>
            <div className="project-description">
              <h3>27 Jardines - Recording studio - Website</h3>
              
              <ul className="project-skills">
                <li>HTML5</li>
                <li>SCSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
              </ul>
              <ul className="project-links">
                <li>
                  <a
                    href="https://github.com/leandrocarriego/27JardinesWeb-LeandroCarriego"
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://27-jardines-web-leandro-carriego.vercel.app/"
                    aria-label="Demo Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="bi bi-box-arrow-up-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="project-card">
            <div className="img-container">
              <img src="https://media.licdn.com/dms/image/C4D22AQE6WE3jqYHOig/feedshare-shrink_2048_1536/0/1669938518793?e=1677110400&v=beta&t=jetGln2Wo2vkmKt3bUyHVcJuNYrXk5MMVzvvlzK3JS4" />
            </div>
            <div className="project-description">
              <h3>Florencia Stupia - Portfolio modelaje</h3>
              
              <ul className="project-skills">
                <li>HTML5</li>
                <li>SCSS</li>
                <li>Next.js</li>
              </ul>
              <ul className="project-links">
                <li>
                  <a
                    href="https://github.com/leandrocarriego/portfolio_fashion_model-nextjs"
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    aria-label="Demo Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="bi bi-box-arrow-up-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="project-card">
            <div className="img-container">
              <img src="https://media.licdn.com/dms/image/C4D22AQE6WE3jqYHOig/feedshare-shrink_2048_1536/0/1669938518793?e=1677110400&v=beta&t=jetGln2Wo2vkmKt3bUyHVcJuNYrXk5MMVzvvlzK3JS4" />
            </div>
            <div className="project-description">
              <h3>Force Gym - Landing page</h3>
              <ul className="project-skills">
                <li>HTML5</li>
                <li>SCSS</li>
                <li>JavaScript</li>
              </ul>
              <ul className="project-links">
                <li>
                  <a
                    href="https://github.com/leandrocarriego/landing_page_gym-HTML5-SCSS-JS"
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://landing-page-gym.vercel.app/"
                    aria-label="Demo Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="bi bi-box-arrow-up-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button
          className="btn-all-projects mt-4 mb-5 w-50 btn mx-auto border"
          type="button"
        >
          <Link to="/projects">Ver todos los projectos</Link>
        </button>
      </div>
    </section>
  );
}

export default SelectedProjects;
