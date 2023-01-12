import { Link } from "react-router-dom";

function SelectedProjects() {
  return (
    <section className="selected-projects container" id="selectedProjects">
      <h2>Estos son algunos de mis proyectos</h2>
      <button className="mt-4 mb-5 w-50 btn mx-auto border" type="button">
        <Link to="/projects">ver todos los projects</Link>
      </button>
    </section>
  );
}

export default SelectedProjects;
