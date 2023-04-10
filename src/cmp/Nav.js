import React from "react";
import bell from "../assets/bell.jpg";
import old from "../assets/old.jpg";
import logoUrl from '../assets/logo.jpg';


const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <div className="image1">
          <img src={logoUrl} alt = "logo" width={150} height={50} />
        </div>
       
      </div>
      <div className="menu">
        <div>
          <label htmlFor="">
            Categories
            <select name="" id=""></select>
          </label>
        </div>
        <div>Teach</div>
        <div>Contact Us</div>
        <div>About Us</div>
      </div>
      <div className="search">Search</div>
      <div className="profile">
        <div className="image">
          <img src={old} alt="old" width={50} height={50} />
        </div>
        <div className="detail">
          <div className="name">Behzad Pashaei</div>
          <div className="prof">Ui & Ux Designer</div>
        </div>
      </div>
      <div className="notibell">
        <img src={bell}  alt="bell" height={30} width={30} />
      </div>
    </div>
  );
};

export default Nav;
