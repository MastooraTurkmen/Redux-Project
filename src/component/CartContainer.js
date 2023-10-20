import CartItem from "./CartItem"
import { useSelector, useDispatch } from "react-redux"

const CartContainer = () => {
    const dispatch = useDispatch()
    const { cartItems, amount, total } = useSelector((store) => store.cart)

    if (amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>Your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <footer>
                <div className="cart-total">
                    <hr />
                    <h4>total
                        <span>${total}</span>
                    </h4>
                </div>
                <button onClick={() => dispatch} className="btn clear-btn">clear btn</button>
            </footer>
        </section>
    )
}

export default CartContainer