import "./Style.css"
import React from 'react';
import { Carousel } from "antd";



const Home = () => {
  return (
    <div className='Home'>
      <div className='Top'>
        <div className='Main_Banner'>
          <Carousel 
            className="Carousel_Banner"
            autoplay>
              <div className="Banner_1 "/>
              <div className="Banner_2 "/>
              <div className="Banner_3 "/>
              <div className="Banner_4 "/>
          </Carousel>
        </div>
        <div className='UserInformation'>
          <div className="User_Details">
              <img src={require("../IMG/Avatar.png")} alt ="avatar"></img>
              <ul className="Information">
                <li className="User_Point">
                <i class="fa fa-thin fa-star" style={{color:"orange"}}></i>
                <p> Điểm</p>
                </li>
                <li className="User_craft">
                  <i class="fa fa-light fa-cart-shopping" style={{color:"gray"}}></i>
                  <p>Giỏ hàng</p>
                </li>
                <li className="User_Wishlist">
                  <i class="fa-solid fa-heart-circle-check" style={{color:"red"}}></i>
                  <p>Yêu thích</p>
                </li>
                <li className="User_Cash">
                  <i class="fa fa-thin fa-sack-dollar" style={{color:"gold"}}></i>
                  <p>Ví</p>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='Product_Container'>
        
      </div>
    </div>
  )
}

export default Home;