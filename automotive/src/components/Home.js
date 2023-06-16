import React from "react";
import axios from "axios";
/* import { Link } from 'react-router-dom'; */

/* import logo from '../images/logo.png';
import dropdown from '../images/dropdown.png';
import time from '../images/time.png'; 
import daily_article from '../images/daily-article.png';
import auto_tips from '../images/auto-tips.png'; */
/* import article from '../images/article-logo.png'; */

import accuracy_peak from '../images/accuracy-peak.png';
import price_peak from '../images/price-peak.png';
import time_peak from '../images/time-peak.png';
import clients from '../images/clients.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';
import linked_in from '../images/linked-in.png';
import social_tag from '../images/social-tag.png';

import Navbar from './Navbar';
import '../components/Home.css';

export default function Home() {

    React.useEffect(() => {
        const token = JSON.parse(sessionStorage.getItem('token'));
        axios.post('http://localhost:5000/auth', token)
          .then((res) => {
            console.log(res.data);
            /* window.location.replace('/home'); */
          })
          .catch((err) => {
            console.log(err);
            sessionStorage.removeItem('token');
        });
    }, []);

    const handleClickScroll = () => {
        const element = document.getElementById('about');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div>
            <Navbar />

            <div className="home-block">
                <div className="header-block">
                    <div className="header">
                        <div className="hero-header">
                            <h1 className="hero secondary">For All Your Visual</h1>
                            <h1 className="hero secondary">Inspections And</h1>
                            <h1 className="hero secondary">Car Repairs</h1>
                        </div>
                        <p>Automative provides one of the best car services in town 
                            with efficient executions by our experts at a very 
                            affordable price.
                        </p>
                        <div className="btn-block">
                            <button className="btn primary">Book Now</button>
                            <button className="btn secondary" onClick={handleClickScroll} >Read More {/* <img className='img vsmall' src={article} alt=''/> */}</button>
                        </div>
                        
                    </div>
                </div>

                <div className="purpose-block">
                    <div className="purpose">
                        <div className="hero-header">
                            <h1 className="hero primary">Our Purpose</h1>
                            <p>As one of the best automobile repair and inspection industry, we are here to garantie you with 
                            the following objectives for you and your vehicle.
                            </p>
                        </div>
                        
        
                        <div className="purpose-body">
                            <div className="purpose-item">
                                <div className="purpose-main">
                                    <h3>Accuracy</h3>
                                    <img src={accuracy_peak} alt="" />
                                    <p>It is a long established fact 
                                        that a reader will be distracted by the readable content of a page.
                                    </p>
                                </div>
                                {/* <img src={accuracy_peak} alt="" /> */}
                            </div>

                            <div className="purpose-item active">
                                <div className="purpose-main">
                                    <h3 className="hero primary">Save Money</h3>
                                    <img src={price_peak} alt="" />
                                    <p>It is a long established fact 
                                        that a reader will be distracted by the readable content of a page.
                                    </p>
                                </div>
                                {/* <img src={price_peak} alt="" /> */}
                            </div>

                            <div className="purpose-item">
                                <div className="purpose-main">
                                    <h3>Less Time</h3>
                                    <img src={time_peak} alt="" />
                                    <p>It is a long established fact 
                                        that a reader will be distracted by the readable content of a page.
                                    </p>
                                </div>
                                {/* <img src={time_peak} alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="clients-block">
                    <div className="clients">
                        <img src={clients} alt="" />
                        <div className="clients-main">
                        <p><span className="hero secondary">+20,000</span> clients have approved the services 
                            we offer at automotive industry.</p>
                        </div>
                    </div>
                </div>

                <div id="about" className="about-block">
                    <div className="about">
                        <div className="header">
                            <div className="hero-header">
                                <h1 className="hero secondary">What About</h1>
                                <h1 className="hero secondary">The Automotive</h1>
                                <h1 className="hero secondary">Porfolio Alx Project</h1>
                            </div>
                            <p>Automotive is a personal project which came up after I completed my driving license last year. The initial project was to create a platform where people could interact with the main topic being vehicles and eventually be able to have thier cars fixed.
                            </p>
                          
                            <div className="btn-block">
                                <button className="btn primary">GitHub Repo</button>
                                <div className="social-block">
                                    <img  src={twitter} alt=''/>
                                    <img  src={linked_in} alt=''/>
                                    <img  src={github} alt=''/>
                                    <img  className="social-tag" src={social_tag} alt=''/>

                                </div>
                                
                            </div>
                            
                        </div>
                    </div>

                </div>

                
            </div>

        </div>
    )
}