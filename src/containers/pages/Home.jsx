import { Link } from "react-router-dom";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <div className="index">
          <section className="presentation container" id="top">
            
              <h2>Full Stack Developer</h2>
              <ul>
                <li>Creativo</li>
                <li>Autodidacta</li>
                <li>Músico</li>
              </ul>
              <button
                className="mt-4 mb-5 w-50 btn mx-auto border text-white"
                type="submit"
              >
                <a href="#contact">Contactame</a>
              </button>
            
          </section>
          <section className="about" id="about">
            <p>
              Soy una persona de mente inquieta, en aprendizaje constante. Me
              gusta la innovación y la creatividad, los entornos donde haya
              nuevos caminos por descubrir, soluciones que encontrar e ideas
              nuevas que aportar. Busco un trabajo que me represente desafíos y
              me permita hacer crecer mis capacidades.
            </p>
          </section>
          <section className="skills" id="skills">
            <div className="">
              <h2>SKILLS</h2>
              <ul>
                <li>Python</li>
                <li>React</li>
                <li>Músico</li>
              </ul>
            </div>
          </section>
          <section className="selected-projects" id="selectedProjects">
            <h2>Estos son algunos de mis proyectos</h2>
            <button>
              <Link to="/projects">ver todos los projects</Link>
            </button>
          </section>
          <section className="contact" id="contact">
            <div className="contact">
              <section className="container contacto-encabezado">
                <h1 className="display-2 fw-bold text-center">CONTACTO</h1>
              </section>
              <section>
                <form
                  className="col-10 col-md-6 mx-auto d-flex flex-column justify-center"
                  action=""
                  method="POST"
                >
                  <label className="pb-1" for="name">
                    Nombre y apellido
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ej. Alan Brito Delgado"
                    required
                  />
                  <label className="pt-4 pb-1" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ej. alanbritodelgadok-po@gmail.com"
                    required
                  />
                  <label className="pt-4 pb-1" for="telefono">
                    {" "}
                    Telefono{" "}
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    id="telefono"
                    placeholder="Ej. +54 9 1122334455"
                  />
                  <p className="pt-4 mb-1">Puedes dejarnos aqui tu consulta</p>
                  <textarea
                    class="mb-2"
                    name="comentario"
                    cols="30"
                    rows="10"
                    placeholder="Detalle aqui su consulta..."
                  ></textarea>
                  <button
                    className="mt-4 mb-5 w-50 btn mx-auto border text-white"
                    type="submit"
                  >
                    Enviar
                  </button>
                </form>
              </section>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default Home;
