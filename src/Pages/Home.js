import React from "react";
import Navbar from "../Components/NavBar";
import "./Home.css";
import desktoplogo from "../assets/images/hero-backgroung-desktop.svg";
import blog1 from "../try/blog-1.jpg";
import blog2 from "../try/blog-2.jpg";
import blog3 from "../try/blog-3.jpg";

import CloudComputing from '../assets/images/CloudComputing.jpg'
import CyberSecurity from '../assets/images/CyberSecurity.jpg'
import DataOps from '../assets/images/DataOps.jpg'
import networking from '../assets/images/networking.jpg'
import procurement from '../assets/images/procurement.jpg'
import SoftwareEngineering from '../assets/images/SoftwareEngineering.jpg'



import aws from "../assets/icons/aws.svg";
import azure from "../assets/icons/azure.png";
import cisco from "../assets/icons/cisco.png";
import physics from "../assets/icons/physics.png";
import html5 from "../assets/icons/html-5.png";
import css3 from "../assets/icons/css-3.png";
import js from "../assets/icons/js.png";
import typescript from "../assets/icons/typescript.png";
import python from "../assets/icons/python.png";
import android from "../assets/icons/android.png";
import appleLogo from "../assets/icons/apple-logo.png";
import java from "../assets/icons/java.png";
import angular from "../assets/icons/angular.png";
import apacheSpark from "../assets/icons/apache_spark.svg";
// import terraform from "../assets/icons/terraform.svg";
import spring from "../assets/icons/spring.svg";
import django from "../assets/icons/django.svg";
import flask from "../assets/icons/flask.svg";
import mongodb from "../assets/icons/mongodb.svg";
import expressjs from "../assets/icons/expressjs.svg";
import kubernetes from "../assets/icons/kubernetes.svg";
import Footer from "../Components/Footer";


function Home() {
  return (
    <div>
      <Navbar />
      <section class="hero">
        <div className="hero-inner">
          <div class="hero-description">
            <div class="highlight">
              <span></span>
              <h4>
                the real <span>it</span> experience
              </h4>
            </div>
            <h3>Technology Solutions For Your Busines</h3>
            {/* <p>
              We are a technology agency dedicated to providing innovative
              solutions for businesses. Our mission is to empower organizations
              with cutting-edge technology and services to help them succeed in
              the digital age. With a team of experts and a commitment to
              excellence, we offer a wide range of services to meet your unique
              needs.
            </p> */}
            <div className="button-div">
              <a href="#" class="get-started-button">
                ABOUT US
              </a>
            </div>
          </div>

          <div className="hero-img">
            <img src={desktoplogo} alt="hero image" />
          </div>
        </div>
      </section>

      <section id="recent-posts" class="recent-posts">
        <div class="container section-title" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div class="container">
          <div class="row gy-4">
            <div
              class="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <article>
                <div class="post-img">
                  <img src={CloudComputing} alt="ho" class="img-fluid" />
                </div>

                

                <h2 class="title">
                  <a href="blog-details.html">
                  Cloud-Computing                  </a>
                </h2>

                <div class="d-flex align-items-center">
                
                  <div class="post-meta">
                    <p class="post-author">We specialize in enterprise cloud solutions, including migration, design, deployment, and security, working with leading providers like Amazon, Microsoft, and Google.</p>
                   
                  </div>
                </div>
              </article>
            </div>

            <div
              class="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <article>
                <div class="post-img">
                  <img src={CyberSecurity} alt="" class="img-fluid" />
                </div>

                <h2 class="title">
                  <a href="blog-details.html">
                  Networking                  </a>
                </h2>

                <div class="d-flex align-items-center">
                  
                  <div class="post-meta">
                    <p class="post-author">We specialize in networking solutions, optimizing your digital infrastructure for maximum efficiency and connectivity. Our services cover network design, implementation, management, and security, ensuring seamless data flow and protection against cyber threats</p>
                   
                  </div>
                </div>
              </article>
            </div>

            <div
              class="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <article>
                <div class="post-img">
                  <img src={DataOps} alt="" class="img-fluid" />
                </div>

                <h2 class="title">
                  <a href="blog-details.html">
                  Procurement                  </a>
                </h2>

                <div class="d-flex align-items-center">
                 
                  <div class="post-meta">
                    <p class="post-author">Our procurement solutions streamline your supply chain, enhancing efficiency and reducing costs. We work with trusted suppliers and implement best practices to provide you with top-notch procurement services, covering vendor management, sourcing, and cost optimization</p>
                    
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div class="row gy-4 pt-5">
            <div
              class="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <article>
                <div class="post-img">
                  <img src={networking} alt="ho" class="img-fluid" />
                </div>
                <h2 class="title">
                  <a href="blog-details.html">
                  Data Center Ops                  </a>
                </h2>

                <div class="d-flex align-items-center">
                  
                  <div class="post-meta">
                    <p class="post-author">We manage and optimize your data center infrastructure to ensure high availability and performance. Our data center services cover everything from installation and maintenance to capacity planning and security, so you can focus on your core business while we keep your IT operations running smoothly</p>
                  
                  </div>
                </div>
              </article>
            </div>

            <div
              class="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <article>
                <div class="post-img">
                  <img src={procurement} alt="" class="img-fluid" />
                </div>


                <h2 class="title">
                  <a href="blog-details.html">
                  Cyber Security                  </a>
                </h2>

                <div class="d-flex align-items-center">
                 
                  <div class="post-meta">
                    <p class="post-author">Protecting your digital assets is our top priority. We offer comprehensive cybersecurity solutions to safeguard your data and systems from evolving threats. Our services include threat detection, incident response, and proactive security measures to keep your organization safe in the digital landscape</p>
                    
                  </div>
                </div>
              </article>
            </div>

            <div
              class="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <article>
                <div class="post-img">
                  <img src={SoftwareEngineering} alt="" class="img-fluid" />
                </div>


                <h2 class="title">
                  <a href="blog-details.html">
                  Software Engineering                  </a>
                </h2>

                <div class="d-flex align-items-center">
                
                  <div class="post-meta">
                    <p class="post-author">Crafting the future with code. Our software engineering team is dedicated to developing cutting-edge applications and systems tailored to your needs. We specialize in full-stack development, custom software solutions, and agile development methodologies to ensure your software projects meet your goals and expectations</p>
                  
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>


      <section class="technologies">
        <h3>our technologies stack</h3>
        <div class="techs">
          <div class="techs-slide">
          <img src={aws} alt="aws" />
<img src={azure} alt="Azure" />
<img src={cisco} alt="cisco" />
<img src={physics} alt="React" />
<img src={html5} alt="html" />
<img src={css3} alt="css" />
<img src={js} alt="javascript" />
<img src={typescript} alt="typescript" />
<img src={python} alt="python" />
<img src={android} alt="android" />
<img src={appleLogo} alt="ios" />
<img src={java} alt="java" />
<img src={angular} alt="angular" />
<img src={apacheSpark} alt="apache spark" />
{/* <img src={terraform} alt="terraform" /> */}
<img src={spring} alt="spring" />
<img src={django} alt="django" />
<img src={flask} alt="flask" />
<img src={mongodb} alt="mongodb" />
<img src={expressjs} alt="expressjs" />
<img src={kubernetes} alt="kubernetes" />
          </div>
          <div class="techs-slide">
          <img src={aws} alt="aws" />
<img src={azure} alt="Azure" />
<img src={cisco} alt="cisco" />
<img src={physics} alt="React" />
<img src={html5} alt="html" />
<img src={css3} alt="css" />
<img src={js} alt="javascript" />
<img src={typescript} alt="typescript" />
<img src={python} alt="python" />
<img src={android} alt="android" />
<img src={appleLogo} alt="ios" />
<img src={java} alt="java" />
<img src={angular} alt="angular" />
<img src={apacheSpark} alt="apache spark" />
{/* <img src={terraform} alt="terraform" /> */}
<img src={spring} alt="spring" />
<img src={django} alt="django" />
<img src={flask} alt="flask" />
<img src={mongodb} alt="mongodb" />
<img src={expressjs} alt="expressjs" />
<img src={kubernetes} alt="kubernetes" />
          </div>
        </div>
      </section>


 <Footer />
    </div>
  );
}

export default Home;