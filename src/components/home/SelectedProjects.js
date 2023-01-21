import { Link } from "react-router-dom";

function SelectedProjects() {
  return (
    <section className="selected-projects" id="selectedProjects">
      <div>
        <h2>Estos son algunos de mis proyectos</h2>
        <div className="projects-container">
          <div className="project">Portfolio personal</div>
          <div className="project">27 Jardines - Recording Studio</div>
          <div className="project">Force Gym - Landing page</div>
          <div className="project">Florencia Stupia - Portfolio</div>
        </div>
        
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
