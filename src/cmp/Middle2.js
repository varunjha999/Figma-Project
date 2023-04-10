import React from "react";
import earth from "../assets/earth.png";
import logoUrl from '../assets/HLW.png';
import img4 from '../assets/image 101.png';
import img3 from '../assets/image 91.png';
import img2 from '../assets/image 81.png';
import img1 from '../assets/img101.png';
import img5 from '../assets/MWLB.png';
import img6 from '../assets/baby.jpg';
import img7 from '../assets/group.png';
import img8 from '../assets/logo.jpg';
import '../cmp/Middle2.css'

const Middle2 = () => {
  return <div className="Middle2">
  <center>
  <div className="center">
  <img src={earth} alt="logo" />
  <h1>Make The World Your Comfort</h1>
  <h1>Zone</h1>
  <p>Speak Naturally With Professional Online Mentors </p>
  <p>From 185 Counteries</p>
  </div>
  </center>
  <div className="container">
  <div className="box1">
    <h1>Expert Tutors</h1>
    <p>Find Native Speakers and Certified Mentors</p>
  </div>

  <div className="box2">
    <h1>Verified Profiles</h1>
    <p>We carefully Check And Confirm Each Mentor's Profile</p>
  </div>

  <div className="box3">
    <h1>Learn Anything</h1>
    <p>Take Online Lessons At The Prefect Time For Your busy schedule</p>
  </div>

  <div className="box4">
    <h1>Affordable Prices</h1>
    <p>Choose An Experienced Mentor Your Budget</p>
  </div>
  </div>
  <center>
  <div className="center2">
  <h1>Focus On The Skills you Need</h1>
  <p>Prepare To Achieve Your Goals With Private Mentors</p>
  </div>
  </center>
  <div className="left1">
  <div>
    <h1>Immense Yourself In A New Culture</h1>
    <p>Connect With Language Experts From Around The World</p>
  </div>

  <div>
    <h1>Get Expert Help When You Need It</h1>
    <p>Learn To Solve Any Problem In Any Language</p>
  </div> 
  </div>

  <div className="right1">
  <div>
    <h1>Succeed In Your Career</h1>
    <p>Develop Your working Vocabulary And Communicate Clearly</p>
  </div>

  <div>
    <h1>Speak Naturally, Always</h1>
    <p>Make A Good Impression And Build Trust In Any Language</p>
  </div>
  </div>

  <div className="center3">
  <center>
   <img src = {logoUrl} alt = "logo" />
  <p>Learn Online With The World's Best Mentors</p>
  </center>
  </div>

  <ol>
    <li><p>Find The Best Mentor</p> 
         <p>Choose From Over 32,000 Online Tutor's. Use Filter To</p>
          <p>Narrow Your Search And Find The Perfect Fit</p> 
          <div className="b1">
          <img src = {img1} alt = "logo" />
          </div>
    </li>

    <li><p>Take Lessons Anytime</p>
          <p>Find The Perfect Time Of Your Busy Schedule.Book Lessons In Second Via</p>
          <p>Desktop Or Mobile</p> 
           <div className="b2"><img src = {img2} alt = "logo" /> </div>
    </li>

    <li>  <p>Enter Virtual Classroom</p>
          <p>When It's Lession Time,Connect With Your Tutor Through Our Comprehensive</p>
          <p>Video Platform</p>
          <div className="b3"> <img src = {img3} alt = "logo" /></div>
    </li>

    <li>  <p>Enjoy Structured Learning</p>
          <p>Keep Track Of Your Learning Progress.Improve Your Speacking And Vocabulary</p>
          <p>With Our Learning Plans</p>
          <div className="b4"> <img src = {img4} alt = "logo" /> </div>
    </li>

  </ol>

  <div className="center4">
  <center>
  <h1>100% Satisfaction Guarantee</h1>
  <p>If You Are Not Satisfied With Trial lession,We will Give You A Free</p>
  <p>Replacement with Another Mentor Or A Full Refund</p>
  </center>
  </div>


<div className="boy">
<img src = {img5} alt = "logo" />
<p>Earn Money Sharing Your Expert Knowledge With Students.Sign Up To</p>
<p>Start Tutoring Online With Preply.</p>

 <div>
  <p>Find New Students</p>
  <p>Grow Your Business</p>
  <p>Grow Your Business</p>
  
 </div>
 <div className="boy1">
 <img src = {img6} alt = "logo" />
 </div>
</div>

<div className="group">
<img src = {img7} alt = "logo" />
<center>
<img src = {img8} alt = "logo" /> </center>
<center>
<h1>Hundreds Of Thousands</h1>
<h1>Students Join Us Monthly</h1>

<p><b>...And Achieve Their Learning Goals.With Our Experts Tutors,Your Goals</b></p>
<p><b>Are Closer Than Ever!</b></p>

<button className="but1">Start Learning</button>
</center>

</div>








  </div>;
};

export default Middle2;
