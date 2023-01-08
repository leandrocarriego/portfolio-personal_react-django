import { connect } from "react-redux";
import Navbar from "components/navigation/Navbar";
import Sidebar from "components/navigation/Sidebar";
import Footer from "components/navigation/Footer";


function Layout({children}) {
    return(
        <body>
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