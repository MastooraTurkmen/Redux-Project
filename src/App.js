import Navbar from "./component/Navbar";
import CartContainer from "./component/CartContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import Modal from "./component/Modal";

function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
