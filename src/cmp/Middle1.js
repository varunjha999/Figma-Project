import React from "react";
import girl from "../assets/girl.jpg";
import "../cmp/Middle1.css";


const Middle1 = () => {
  return (
    <>
      <div className="mupper">
        <div className="middle">
          <div className="left" >
            <h1>Practical Learning Journey To <br></br>Earn With Fun - LearnInbox</h1>
            <button className="mbtn">Start Course Now</button>
          </div>
          <div className="right">
            <img src={girl} alt="girl" height={400} width={600} /> 
          </div>
        </div>
        <div className="bottom">
          <div className="btop">
            Search Among <span style={{color: "purple" }}>58340</span> Courses And <br></br>Find Your Favourite Course
          </div>
          <div className="bbottom">
            <button>Categories</button>
            <div>Search</div>
            <div>Or View The Following Courses...</div>
          </div>
        </div>
        <div className="div_list">
          <div className="list1">
          
            <p>PhD Mentors</p>
            <p>R&D Mentors</p>
            <p>Skill Development Mentors</p>
            <p>Language Mentors</p>
            <p>Entreprenurship Mentors</p>
          
          </div>
          <div className="list2">
          <ul>
            <p>Coading Learning Mentors</p>
            <p>Project Learning Mentors</p>
            <p>Career Development Mentors</p>
            <p>Subject Mentors</p>
            <p>Courses Mentors</p>


           </ul>

          </div>
        </div>
      </div>
    </>
  );
};

export default Middle1;
