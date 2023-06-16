import React from 'react';
import { Link } from 'react-router-dom';

import '../components/Navbar.css';
import logo from '../images/logo.png';
import dropdown from '../images/dropdown.png';
import time from '../images/time.png';
import article from '../images/article-logo.png';
import daily_article from '../images/daily-article.png';
import auto_tips from '../images/auto-tips.png';

export default function Navbar(){

    const link_style = {
        color : '#fff',
        textDecoration : 'none',
        textTransform: 'uppercase'
    };

    const [dropdownBtn, setDropdownBtn] = React.useState(false);
    const [navbarBtn, setnavbarBtn] = React.useState(false);

    function toogleNavbar() {
        if (dropdownBtn) {
            toggleDropdown();
        }
        return setnavbarBtn(prevNavbar => !prevNavbar);
    }
    function toggleDropdown() {
        return setDropdownBtn(prevDropdown => !prevDropdown);
    }

    return (
        <div className='navbar-block'>

            <div className='logo-block active'>
                <Link className='link-path' to={'/'}>
                    <div className="logo">
                        <img src={logo} alt="Logo-img" />
                        <h3>utomotive</h3>
                    </div>
                </Link>

                <div className="menu-block">
                    <div className='btn-block'>
                        <button className='btn primary'><Link className='link-tag' to={'/sign-in'}>Sign In</Link></button>
                    </div>
                    
                    <div className="menu">
                        <input type='checkbox' id='menu-check' onClick={toogleNavbar}/>
                        <label for='menu-check' className="menu-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
            </div>

            <div className={navbarBtn ? 'link-block' : 'links-block active'} >
                <div className='links'>
                    <li className='link'><Link className='link-tag' to={'/home'}>Home</Link></li>

                    <div class="dropdown-block">
                        <div className='dropdown-tag'>
                            <input type='checkbox' id='dropdown-link' onClick={toggleDropdown}/>
                            <label for='dropdown-link' className='dropdown-btn'>
                                <li className="dropdown-btn" style={link_style} to={'/'}>
                                    Services
                                    <img className='img small' src={dropdown} alt=''/>
                                </li>
                            </label>
                        </div> 

                        <div className={dropdownBtn ? 'dropdown' : 'dropdown active'}>

                            <div className="articles-block">

                                <div className="daily-block">
                                    <div className="daily-header">
                                        <div className="daily-main">
                                            <h4>Daily</h4>
                                            <h4>Aritcle</h4>
                                            <div className="daily-time">
                                                <img className='img small' src={time} alt="" />
                                                <small>15 MINS READ</small>
                                            </div>
                                        </div>
                                        <img className='img small' src={article} alt="Article-logo" />
                                    </div>
    
                                    <div className="daily-body">
                                        <div className="daily-main">
                                            <div className="daily-hero">
                                                <h3 className="hero primary">Check Your Spare</h3>
                                                <h3 className="hero primary">Tires Everyday</h3>
                                            </div>
                                            <p>Each type of vehicle usually has a different type of spare tire, depending on the type.</p>
                                        </div>
                                        <img src={daily_article} alt="Daily Article" />

                                        {/* <div className='btn-block'>
                                            <button className="btn primary">Read More</button>
                                        </div> */}
                                    </div>
                                </div>
    
                                <div className="articles">
                                    <div className="articles-hero">
                                        <h3 className="hero secondary">Other</h3>
                                        <h3 className="hero secondary">Articles</h3>
                                    </div>
                                    <div className="articles-items">
                                        <p>Check your spare tire</p>
                                        <p>Keep the battery clean</p>
                                        <p>Replace the brake pads</p>
                                        <p>Change the oil</p>
                                    </div>
                                </div>
                            </div>
                            

                            <div class="tips-block">
                                <div class="tips-header">
                                    <div class="tips-main">
                                        <h4>New</h4>
                                        <h4>Update</h4>
                                    </div>
                                    <img className='img small' src={article} alt="Article-logo" />
                                </div>

                                <div class="tips-hero">
                                    <h3 class="hero primary">Auto Tips</h3>
                                </div>

                                <img src={auto_tips} alt="Auto Tips" />
                                <p>Each type of vehicle usually has a different type of spare tire, depending on the type.</p>

                                {/* <div className='btn-block'>
                                    <button className="btn primary">Read More</button>
                                </div> */}
                            </div>

                        </div>
                    </div>

                    <li className='link'><Link className='link-tag' to={'/'}>Contact</Link></li>
                </div>
            </div>
        </div>
    )
}