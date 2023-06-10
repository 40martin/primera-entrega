import logocoto from "./images/logo_coto.jpg";
import ofertascotofindesemana from "./images/ofertas_coto_fin_de_semana.jpg";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-light">
                <div className="col-md-6">
                    <img src={logocoto} alt={"logocoto"} width={200} />
                </div>

                <div className="col-md-6 text-end">
                    <a href="#" className="text-dark">Buscar Sucursal</a> | <a href="#" className="text-dark">Contacto</a>


                </div>
            </div>

            <div className="row bg-light">
                <div className="col-md-4">
                    <img src={ofertascotofindesemana} alt={"ofertascoto"} width={400} />
                </div>

                <div className="col-md-4 text-center">
                    NavBar

                </div>

                <div className="col-md-4 text-end">
                    CartWidget
                </div>
            
            </div>
            
        </div>
    )
}

export default Header;