import preciosjustos from "./images/precios_justos.jpg";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import youtube from "./images/youtube.svg";

const Footer = () => {
    return (
        <div className="container-fluid text-light bg-dark py-5">
            <div className="row">
                <div className="col">
                    <h3>Buscar Sucursal</h3>
                </div>

                <div className="col">
                    <h3>Acerca de Coto</h3>
                </div>

                <div className="col">
                    <h3>Ayuda a sus preguntas</h3>
                </div>

                <div className="col">
                    <img src={preciosjustos} alt={"preciosjustos"} width={100} />
                </div>

                <div className="col-md-4 text-end">
                    <a href="https://www.facebook.com/coto"><img src={facebook} alt={"facebook"} width={50} /></a>
                    <a href="https://www.instagram.com/coto_ar/"><img src={instagram} alt={"instagram"} width={50} /></a>
                    <a href="https://www.youtube.com/coto_ar/"><img src={youtube} alt={"youtube"} width={50} /></a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;