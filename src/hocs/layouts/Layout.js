import { connect } from "react-redux";
import Navbar from "components/navigation/Navbar";
import Sidebar from "components/navigation/Sidebar";
import Footer from "components/navigation/Footer";

// https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf

function Layout({children}) {
    return(
        <body>
            <Navbar/>
            <main>
                <Sidebar/>
                {children}
            </main>
            <Footer/>
        </body>
    )
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {

}) (Layout);