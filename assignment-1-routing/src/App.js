import axios from "axios";
import { createContext, useEffect, useState } from "react";
import "./App.css";
// import Navbar from "./Components/Navbar";
import Layout from "./Routes/Layout";

// creating context api
export const AppContext = createContext();

function App() {
  // state for products storing
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [signed, setSigned] = useState(true);
  const [logging, setLogging] = useState(false);
  // fetching products from server using axios
  const fetchProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setproducts(res.data.products);
  };

  // this will run only once
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        setproducts,
        cart,
        setCart,
        wishlist,
        setWishlist,
        signed,
      }}
    >
      <Layout />
    </AppContext.Provider>
  );
}
export default App;
