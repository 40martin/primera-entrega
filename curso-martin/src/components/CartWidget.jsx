import cart from "./images/cart.svg";

const CartWidget = () => {
    return (
        <button type="button"className="btn btn-primary position-relative">
                <img src={cart} alt="carrito" width={50} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        
        </button>
    )
}

export default CartWidget;