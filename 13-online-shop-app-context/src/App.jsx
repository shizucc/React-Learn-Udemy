import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";

import CartContexProvider from "./store/shopping-cart-context.jsx";
function App() {
  return (
    <CartContexProvider>
      <Header />
      <Shop />
    </CartContexProvider>
  );
}

export default App;
