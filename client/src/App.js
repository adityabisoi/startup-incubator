import React from "react";
import "./App.css";
import Headers from "./HomePage/Header";
import Body from "./HomePage/Body";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./HomePage/Footer";
import Product from './Components/Product/Product'
import ScrollButton from './Components/ScrollButton/ScrollButton';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="product_details">
              <Route path=":product_id" element={<Product />}></Route>
            </Route>
          </Routes>

          {/* <p>{!data ? "Loading..." : data}</p> */}
          {/* The above line is replaced by helloworld when backend is running */}
          <ScrollButton />
          <Footer />
        </div>
      </Router>
      
    </>
  );
}

export default App;
