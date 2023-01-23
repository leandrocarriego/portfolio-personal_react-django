import { Link } from "react-router-dom";

function SelectedProjects() {
  return (
    <section className="selected-projects" id="selectedProjects">
      <div>
        <h2>Estos son algunos de mis proyectos</h2>
        <ul className="projects-container">
          <li className="project-card">
            
            <div className="img-container">
              <img src="https://media.licdn.com/dms/image/C4D22AQE6WE3jqYHOig/feedshare-shrink_2048_1536/0/1669938518793?e=1677110400&v=beta&t=jetGln2Wo2vkmKt3bUyHVcJuNYrXk5MMVzvvlzK3JS4" width={"100%"}/>
            </div>
            <div className="project-description">
              <h3>Portfolio</h3>
              <div className="description">
                <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on 
                </p>
              </div>
              <ul className="project-skills">
                <li>VS Code</li>
                <li>Sublime Text</li>
                <li>Atom</li>
                <li>iTerm2</li>
                <li>Hyper</li>
              </ul>
              <div className="project-links">
                <a href="https://github.com/bchiang7/halcyon-site" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
                  <i className="bi bi-github"></i>
                  </a>
              <a href="https://github.com/bchiang7/halcyon-site" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank"><i class="bi bi-box-arrow-up-right"></i></a>
              </div>

            </div>
          </li>
          {/* <div className="project">27 Jardines - Recording Studio</div>
          <div className="project">Force Gym - Landing page</div>
          <div className="project">Florencia Stupia - Portfolio</div> */}
        </ul>
        
      </div>
      <div className="btn-container">
        <button className="btn-all-projects mt-4 mb-5 w-50 btn mx-auto border" type="button">
            <Link to="/projects">Ver todos los projectos</Link>
        </button>
      </div>
    </section>
  );
}

export default SelectedProjects;
