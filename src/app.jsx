import React from "react";
import Best from "./components/Best.jsx";
import Customer from "./components/Customer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import { SpecialItems } from "./components/SpecialItems.jsx";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />
        <Best />
        <SpecialItems />
        <Customer />
      </div>
    );
  }
}

export default App;
