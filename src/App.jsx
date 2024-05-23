import { Provider } from "react-redux";
import store from "./store/store.js";
import Counter from "./Counter.jsx";
import Header from "./Component/Header.jsx";
import Products from "./Component/Product.jsx";
import Productdata from "./product.json";
console.log(Productdata)

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Products products={Productdata.products} />

{console.log(Productdata.products)}

        <Counter />
      </Provider>
    </>
  );
}

export default App;
