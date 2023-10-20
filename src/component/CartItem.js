import { ChevronDown, ChevronUp } from '../icons'

const CartItem = ({ id, img, title, price, amount }) => {
    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <div>
            </div>
        </article>
    )
}

export default CartItem