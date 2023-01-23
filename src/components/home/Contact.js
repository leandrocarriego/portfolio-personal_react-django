function Contact() {
    return(
      <section className="contact pt-5" id="contact">
      <div className="contact ">
        <section className="container">
          <h1 className="display-2 fw-bold text-center">CONTACTO</h1>
        </section>
        <section>
          <form
            className="col-10 col-md-6 mx-auto d-flex flex-column justify-center"
            action=""
            method="POST"
          >
            <label className="pb-1" for="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ej. alanbritodelgadok-po@gmail.com"
              required
            />
            <p className="pt-4 mb-1">Puedes dejarnos aqui tu consulta</p>
            <textarea
              class="mb-2"
              name="comentario"
              cols="30"
              rows="6"
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
    )
}

export default Contact;