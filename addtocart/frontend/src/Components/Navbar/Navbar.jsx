import React from 'react' ;
import './Navbar.css'

const Navbar=()=>{
    return(
        <><div>
        <div class="navbar">
          <a href="index.html">Home</a>
          <a href="guideToSell.html">Guide to Sell</a>
          <a href="buy.html">Buy</a>
          <a href="sell.html">Sell</a>
          <div class="dropdown">
            <button class="dropbtn">Clubs
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="fiction.html">Fiction</a>
              <a href="nonfiction.html">Non Fiction</a>
              <a href="education.html">Education</a>
            </div>
          </div>

          <a href="aboutus.html">About Us</a>
          <a href="help.html">FAQ</a>
          <a href="contact.html">Contact Us</a>

          <div class="signup">
            <a href="login.html">Login</a>
            <a href="sign_up.html">Sign Up</a>
          </div>
        </div>
      </div><div><header>Shopping Cart</header></div>
      <div><p class="EmptyCart">Cart's lonely. Add some stories!</p></div>
      <div><button class='btn'><a href="buy.html">Return to Shop</a></button></div></>
    );
};
export default Navbar;