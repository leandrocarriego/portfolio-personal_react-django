import { connect } from "react-redux";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";


function Layout({children}) {
    return(
        <body>
            <main>
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