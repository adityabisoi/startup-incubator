import React from "react";
import "./App.css";
import Headers from "./HomePage/Header";
import Body from "./HomePage/Body";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/express_backend")
      .then((res) => res.json())
      .then((data) => setData(data.express));
  }, []);
  return (
    <div className="App">
      <Headers />
      <Body />
      <p>{!data ? "Loading..." : data}</p>
      {/* The above line is replaced by helloworld when backend is running */}
    </div>
  );
}

export default App;
