import Layout from 'hocs/layouts/Layout';

function Contact() {
    return (
        <Layout>
            <div className="contact">
                <section className="container contacto-encabezado">
                    <h1 className="display-2 fw-bold text-center">
                        CONTACTO
                        </h1>
                </section>
                <section>
                    <form className="col-10 col-md-6 mx-auto d-flex flex-column justify-center" action="" method="POST">
                        <label className="pb-1" for="name">Nombre y apellido</label>
                        <input type="text" id="name" name="name" placeholder="Ej. Alan Brito Delgado"
                        required />
                        <label className="pt-4 pb-1" for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Ej. alanbritodelgadok-po@gmail.com" required />
                        <label className="pt-4 pb-1" for="telefono"> Telefono </label>
                        <input type="tel" name="telefono" id="telefono" placeholder="Ej. +54 9 1122334455" />
                        <p className="pt-4 mb-1">Puedes dejarnos aqui tu consulta</p>
                        <textarea class="mb-2" name="comentario" cols="30" rows="10"
                        placeholder="Detalle aqui su consulta..."></textarea>
                        <button className="mt-4 mb-5 w-50 btn mx-auto border text-white" type="submit">Enviar</button>
                    </form>
                </section>
            </div>       
        </Layout>
    )
}

export default Contact;