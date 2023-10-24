import Navbar from "./component/Navbar";
import CartContainer from "./component/CartContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((item) => item.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cart])

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
