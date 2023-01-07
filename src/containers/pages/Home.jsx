import Layout from "hocs/layouts/Layout";

function Home() {
  return (
    <Layout>
      <section className="encabezado container">
        <div className="">
            <div className="">
                <div className="">
                <h2>Full Stack Developer</h2>
                <ul>
                    <li>Creativo</li>
                    <li>Autodidacta</li>
                    <li>Músico</li>
                </ul>
                <div className="">
                <button className="mt-4 mb-5 w-50 btn mx-auto border text-white" type="submit"><a href="">Contactame</a></button>
                </div>
                </div>
            </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
