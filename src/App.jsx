import { Provider } from "react-redux";
import store from "./assets/store/store";
import Counter from "./Counter";

import Header from "./assets/Component/Header";


function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Counter/>
     
      </Provider>
    </>
  );
}

export default App;
