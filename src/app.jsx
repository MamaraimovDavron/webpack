import React from "react";
import Best from "./components/Best.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />
        <Best />
      </div>
    );
  }
}

export default App;
