import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Style.css"

import HeaderContainer from "../../Components/Header";
import Login from "../../Components/Form/Login";
import Register from "../../Components/Form/Register";
import Home from "../../Components/MainPage";
import NotFoundPage from "../../Components/NotFoundPage";


const StoreApp = () => {
    return (
      <div className='Store_App'>
        <Router>
          <HeaderContainer />
          <Routes>
            <Route path ="/" element = {<Home/>}></Route>
            <Route path ="user" element = {<Login/>}></Route>
            <Route path ="*" element = {<NotFoundPage/>}></Route>
            <Route path ="login" element = {<Login/>}></Route>
            <Route path ="register" element = {<Register/>}></Route>

          </Routes>
        </Router>
      </div>
    )
  }
  
  export default StoreApp;