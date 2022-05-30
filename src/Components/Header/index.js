import React from 'react'
import "./Style.css"
import { Link } from "react-router-dom"


import SearchBar from '../SearchBar'

const HeaderContainer = () => {
  return (
    <div className='header_container'>
        <nav className="nav_bar">
            <ul className='nav_left'>
                <li>
                    <a href='https://facebook.com' target="_blank" rel='noopener noreferrer'>
                        <i class="fa-brands fa-facebook"></i>
                        <span>Facebook</span>
                    </a>
                </li>
                <li>
                    <a href='https://youtube.com' target="_blank" rel='noopener noreferrer'>
                        <i class="fa-brands fa-youtube"></i>
                        <span>YouTube</span>
                    </a>
                </li>
                <li>
                    <a href='https://tiktok.com' target="_blank" rel='noopener noreferrer'>
                        <i class="fa-brands fa-tiktok"></i>
                        <span>Tiktok</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li className ="Notification ">
                    <i class="fa-regular fa-bell"></i>
                        <span>Thông báo</span>
                    <div className='Hidden_Support'></div>
                </li>
                <li>
                    <Link to = "/hotro">
                    <i class="fa-regular fa-circle-question"></i>
                        <span>Hỗ trợ</span>
                    </Link>
                </li>
                <li>
                    <Link to ="/user">
                    <i class="fa-regular fa-circle-user"></i>
                    <span>Tài khoản</span>
                    </Link>
                </li>
            </ul>
        </nav>
        <div className='header_bar'>
            <div className='Logo'>
                <Link to = "/">
                    <img src={require("../IMG/Logo.png")} alt ="logo"></img>
                </Link>
            </div>
            <div className='Search_Bar'>
                <SearchBar/>
            </div>
        </div>
    </div>
  )
}

export default HeaderContainer;