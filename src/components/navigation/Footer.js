import { connect } from "react-redux";

function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/leandro-carriego/"
            role="button"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/leandrocarriego/"
            role="button"
            target="_blank"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="mailto:leandrocarriego@hotmail.com"
            role="button"
          >
            <i className="bi bi-envelope"></i>
          </a>
        </section>
      </div>
      <div className="autor text-center p-3 ">
        <a href="mailto:leandrocarriego@hotmail.com">
        © 2022 Copyright: Leandro Carriego
        </a>
      </div>
    </footer>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Footer);
