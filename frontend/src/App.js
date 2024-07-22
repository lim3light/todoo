import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Todo from "./components/todo/Todo";
import Signup from "./components/signup/Signup";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Singin from "./components/signup/Singin";
import { authActions } from "./store";
import { useDispatch } from "react-redux";



const App = () => {
  const dispatch = useDispatch();
  useEffect (()=>{
    //to manage session when already logged in 
  const id = sessionStorage.getItem("id");
  if (id) {dispatch(authActions.login());}
  })
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route> 
          <Route path="/todo" element={<Todo/>}>
          </Route> 
          <Route path="/signup" element={<Signup/>}>
          </Route>
          <Route path="/signin" element={<Singin/>}>
          </Route> 
        </Routes>
      </Router>
      <Footer />
    </div>

  );
};

export default App;