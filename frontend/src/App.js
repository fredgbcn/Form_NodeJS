import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Form from "./component/Form";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";


function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

      </Routes>
      <Form/>
    </Router>
    );
}

export default App;
