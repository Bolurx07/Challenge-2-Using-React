import React from "react";
import "./Homepage.css";
import backgroundpic from "../../Assets/background-pic.svg";
import star1 from "../../Assets/star-1.svg";
import star2 from "../../Assets/star-2.svg";
import star3 from "../../Assets/star-3.svg";
import ellipse1 from "../../Assets/ellipse-1.svg";
import ellipse2 from "../../Assets/ellipse-2.svg";
import ellipse3 from "../../Assets/ellipse-3.svg";
import homepagepic from "../../Assets/homepagepic.png";
import icon1 from "../../Assets/icon-1.svg";
import icon2 from "../../Assets/icon-2.svg";
import icon3 from "../../Assets/icon-3.svg";
import pic1 from "../../Assets/pic-1.png";
import pic2 from "../../Assets/pic-2.png";




const Homepage = () => {
  return (
    <div>

      <img className="backgroundpic" src={backgroundpic} alt="background-pic" />

      <section className="chiefcontainer">
        <div>
          <img className="star-1" src={star1} alt="star" />
        </div>
        <img className="ellipse-1" src={ellipse1} alt="ellipse-1" />
        <div className="headercontainer">
          <div className="headercontent">
            <h1>
              <span>Secure the</span> future with us.
            </h1>
            <div className="subheader">
              <div className="mainstarcontainer">
                <div className="starcontainer">
                  <img src={star2} alt="star" />
                  <img src={star2} alt="star" />
                </div>
                <img src={star3} alt="star" />
              </div>
              <p>
                Lorem ipsum <span>dolor sit</span> amet, consectetur
              </p>
            </div>
            <div className="headerbutton">
              <button className="headerbutton1">
                <a href="#">Sign Up</a>
              </button>
              <button className="headerbutton2">
                <a href="#">Explore</a>
              </button>
            </div>
          </div>
          <img className="homepagepic" src={homepagepic} alt="homepagepic" />
        </div>
      </section>

      <img className="ellipse-2" src={ellipse2} alt="ellipse-2" />

      <section className="servicecontainer">
        <div className="servicecontainer1">
          <span className="service">Services</span>
          <p className="serviceheading">Top Notch Business</p>
        </div>
        <div className="servicecontainer2">
          <div className="servicediv">
            <p className="serviceheading">Business Development</p>
            <p className="servicecontent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              vitae mus est vel ligula. Tempus eu adipiscing eget porttitor
              sapien.
            </p>
            <button className="servicebutton">
              <a href="#">Learn More</a>
            </button>
          </div>
          <div className="servicediv">
            <p className="serviceheading">Ark Foundation</p>
            <p className="servicecontent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              vitae mus est vel ligula. Tempus eu adipiscing eget porttitor
              sapien.
            </p>
            <button className="servicebutton">
              <a href="#">Learn More</a>
            </button>
          </div>
        </div>
        <div className="servicecontainer3">
          <div className="servicediv">
            <p className="serviceheading">Real Estate</p>
            <p classNam="servicecontent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              vitae mus est vel ligula. Tempus eu adipiscing eget porttitor
              sapien.
            </p>
            <button className="servicebutton">
              <a href="#">Learn More</a>
            </button>
          </div>
          <div className="servicediv">
            <p className="serviceheading">Investment and Assest Management</p>
            <p className="servicecontent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              vitae mus est vel ligula. Tempus eu adipiscing eget porttitor
              sapien.
            </p>
            <button className="servicebutton">
              <a href="#">Learn More</a>
            </button>
          </div>
        </div>
      </section>

      <img className="ellipse-3" src={ellipse3} alt="ellipse-3"/>

    <section>
        <div className="heading2">
            <h2>We Are Top Notch At What We Render.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sit congue odio enim vitae ullamcorper eu quis amet.</p>
        </div>
        <div className="h2content" >
            <div>
                <img src={icon1} alt="icon-1"/>
                <p className="h2subcontent">Quality Service</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div id="h2special">
                <img src={icon2} alt="icon-2"/>
                <p className="h2subcontent">Quality Service</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
                <img src={icon3} alt="icon-3"/>
                <p className="h2subcontent">Quality Service</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <h3>What People Say About Us.</h3>
        <div className="aboutuscontainer">
            <div>
                <img src={pic1} alt="pic-1"/>
                <div className="aboutuscontent">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus pharetra tristique tristique elementum</p>
                    <span>Tobiloba K.</span>
                </div>
            </div>
            <div>
                <img src={pic2} alt="pic-2"/>
                <div className="aboutuscontent">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus pharetra tristique tristique elementum</p>
                    <span>Tobiloba K.</span>
                </div>
            </div>
            <div>
                <img src={pic1} alt="pic-3"/>
                <div className="aboutuscontent">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus pharetra tristique tristique elementum</p>
                    <span>Tobiloba K.</span>
                </div>
            </div>
        </div>
    </section>
    
    <img className="ellipse-4" src={ellipse2}alt="ellipse-4"></img>

    </div>
  );
};

export default Homepage;