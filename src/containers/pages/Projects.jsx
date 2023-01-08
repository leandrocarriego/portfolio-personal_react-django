import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "hocs/layouts/Layout";

function Projects() {
    return (
        <Layout>
            <Link to="/">
                volver
            </Link>
            <h1>Projects</h1>
        </Layout>
        
    )
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Projects);