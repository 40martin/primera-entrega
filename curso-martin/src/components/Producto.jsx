import levitenaranja from "./images/levite_naranja.webp";
import lechelaserenisima from "./images/leche_la_serenisima.jpg";
const Producto = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center">
                    <img src={levitenaranja} alt="levitenaranja" width={150} className="img-fluid" />
                    <h2>OFERTA</h2>
                    <a href="#" className="btn btn-dark"><b>COMPRAR</b></a>

                    <img src={lechelaserenisima} alt="lechelaserenisima" width={150} className="img-fluid" />
                    <h2>LECHE EN OFERTA</h2>
                    <a href="#" className="btn btn-dark"><b>COMPRAR</b></a>
                </div>
            </div>
        </div>
    )
}

export default Producto;