import Navbar from "./component/Navbar";
import CartContainer from "./component/CartContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
