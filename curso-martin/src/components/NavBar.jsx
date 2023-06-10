const NavBar = () => {
    return (
        
        <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active text-dark" aria-current="page" href="#">Ofertas</a>
                </li>

                 <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Descuentos</a>
                </li>

                <li className="nav-item">
                    <a class="nav-link text-dark" href="#">Mercado Pago</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Comunidad Coto</a>
                </li>
        </ul>
    )
}

export default NavBar;