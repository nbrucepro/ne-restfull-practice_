
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import LoginPage from "./components/pages/Login";
import SignupPage from "./components/pages/Signup";
import AppCart from "./tests/AppCart";
import Amazon from "./amazon/Amazon";
import Modal from "./amazon/components/Modal";

function App() {
  return (
    <div className="App">
      
      {/* <AppCart/> */}
      <Amazon/>
    </div>
  );
}

export default App;
