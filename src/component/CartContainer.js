import CartItem from "./CartItem"
import { useSelector } from "react-redux"

const CartContainer = () => {
    const { cartItems, amount, total } = useSelector((store) => store.cart)

    if (amount < 1) {
        return (
            <section className="cart">

            </section>
        )
    }

    return (
        <div>CartContainer</div>
    )
}

export default CartContainer