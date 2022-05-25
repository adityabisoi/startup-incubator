import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutus from "./AboutusPage/AboutusPage";
import "./App.css";
import Product from "./Components/Product/Product";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
import Contact from "./ContactPage/ContactPage";
import CreateProduct from "./CreateProduct/CreateProduct";
import ForgotPassword from "./ForgotPasswordPage/ForgotPassword";
import Body from "./HomePage/Body";
import Footer from "./HomePage/Footer";
import Headers from "./HomePage/Header";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ResetPassword from "./ForgotPasswordPage/ResetPassword";

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
          <div className="main">
            <Routes>
              <Route path="/" exact element={<Body />}></Route>
              <Route path="product_details">
                <Route path=":product_id" element={<Product />}></Route>
              </Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Register />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route
                exact
                path="/reset-password"
                element={<ForgotPassword />}
              ></Route>
              <Route
                exact
                path="/reset-password/:token"
                element={<ResetPassword />}
              ></Route>
              <Route path="/new-product" element={<CreateProduct />}></Route>
              <Route path="/aboutus" element={<Aboutus />}></Route>
              {/* <Route path="/logout" element={<Login />}></Route> */}
            </Routes>
          </div>
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
