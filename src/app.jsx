import React from "react";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
