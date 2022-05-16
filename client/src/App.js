import React from "react";
import "./App.css";
import Headers from "./HomePage/Header";
import Body from "./HomePage/Body";
import Footer from "./HomePage/Footer";
import Product from "./Components/Product/Product";
import Login from "./Login/Login";
import Contact from "./ContactPage/ContactPage";
import Register from "./Register/Register";
import CreateProduct from "./CreateProduct/CreateProduct";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
import ForgotPassword from "./ForgotPasswordPage/ForgotPassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/express_backend")
      .then((res) => res.json())
      .then((data) => setData(data.express));
  }, []);

  return (
    <>
      <Router>
        <div className="App">
          <Headers />
          <Routes>
            <Route path="/" exact element={<Body />}></Route>
            <Route path="product_details">
              <Route path=":product_id" element={<Product />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Register />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/forgot" element={<ForgotPassword />}></Route>
            <Route path="/new-product" element={<CreateProduct />}></Route>
            {/* <Route path="/logout" element={<Login />}></Route> */}
          </Routes>
          <div className="scrollbtn">
          <ScrollButton />
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
