import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Header from "components/home/Header";
import About from "components/home/About";
import Skills from "components/home/Skills";
import SelectedProjects from "components/home/SelectedProjects";
import Contact from "components/home/Contact";

function Home() {
  return (
    <>
      <Layout>
      <Navbar/>
        <div className="index">
          <Header/>
          <About/>
          <Skills/>
          <SelectedProjects/>
          <Contact/>
        </div>
      </Layout>
    </>
  );
}

export default Home;
