import Navbar from "./component/Navbar";
import CartContainer from "./component/CartContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
