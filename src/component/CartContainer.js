import CartItem from "./CartItem"
import { useSelector } from "react-redux"

const CartContainer = () => {
    const { cartItems, amount, total } = useSelector((store) => store.cart)

    if (amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>Your bag</h2>
                    <h4 className="empty-cart"></h4>
                </header>
            </section>
        )
    }

    return (
        <div>CartContainer</div>
    )
}

export default CartContainer