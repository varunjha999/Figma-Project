import React from "react";
import girl from "../assets/girl.jpg";


const Middle1 = () => {
  return (
    <>
      <div className="mupper">
        <div className="middle">
          <div className="left" >
            <h1>Practical Learning Journey To Earn With Fun - LearnInbox</h1>
            <button className="mbtn">Start Course Now</button>
          </div>
          <div className="right">
            <img src={girl} height={400} width={600} /> 
          </div>
        </div>
        <div className="bottom">
          <div className="btop">
            Search Among 58340 Courses And Find Your Favourite Course
          </div>
          <div className="bbottom">
            <button>Categories</button>
            <div>Search</div>
            <div>Or View The Following Courses...</div>
          </div>
        </div>
        <div className="div_list">
          <div className="list1">
          <ul>
            <li>PhD Mentors</li>
            <li>R&D Mentors</li>
            <li>Skill Development Mentors</li>
            <li>Language Mentors</li>
            <li>Entreprenurship Mentors</li>
          </ul>
          </div>
          <div className="list2">
          <ul>
            <li>Coading Learning Mentors</li>
            <li>Project Learning Mentors</li>
            <li>Career Development Mentors</li>
            <li>Subject Mentors</li>
            <li>Courses Mentors</li>


           </ul>

          </div>
        </div>
      </div>
    </>
  );
};

export default Middle1;
