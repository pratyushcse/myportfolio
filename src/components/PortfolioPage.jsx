// src/components/PortfolioPage.jsx
import React from 'react';
import logo from '../images/logo.png';
import aboutImage from '../images/about.jpg';
import work1 from '../images/work-1.png';
import work2 from '../images/work-2.png';
import work3 from '../images/work-3.png';

const PortfolioPage = () => {
    const openMenu = () => {
        document.getElementById('sidemenu').style.right = '0';
    };

    const closeMenu = () => {
        document.getElementById('sidemenu').style.right = '-200px';
    };

    const openTab = (tabId) => {
        const tabs = document.querySelectorAll('.tab-contents');
        const links = document.querySelectorAll('.tab-links');

        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
        });
        
        links.forEach(link => {
            link.classList.remove('active-link');
        });

        document.getElementById(tabId).classList.add('active-tab');
        document.querySelector(`.tab-links[onclick="openTab('${tabId}')"]`).classList.add('active-link');
    };

    return (
        <div>
            <div id="header">
                <div className="container">
                    <nav>
                        <img src={logo} alt="Logo" className="logo" />
                        <ul id="sidemenu">
                            <li><a href="#header">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
                        </ul>
                        <i className="fa-solid fa-bars" onClick={openMenu}></i>
                    </nav>
                    <div className="header-text">
                        <p>Front-End Developer</p>
                        <h1>Hi, I'm <span>Pratyush</span><br />From India</h1>
                    </div>
                </div>
            </div>

            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="about-col-1">
                            <img src={aboutImage} alt="About" />
                        </div>
                        <div className="about-col-2">
                            <h1 className="subtitle">About Me</h1>
                            <p className="inf">I Am Pratyush Currently I Am Studying Computer Science Diploma In KPT Mangalore And Staying In Manglore India.</p>

                            <div className="tab-titles">
                                <p className="tab-links active-link" onClick={() => openTab('skills')}>Skills</p>
                            </div>

                            <div className="tab-contents active-tab" id="skills">
                                <ul>
                                    <li><span>UI/UX</span><br />DESIGNING WEB PAGES</li>
                                    <li><span>WEB DEVELOPMENT</span><br />WEB APP DESIGNING</li>
                                    <li><span>APP DEVELOPMENT</span><br />BUILDING IOS APPS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="services">
                <div className="container">
                    <h1 className="sub-title">My Services</h1>
                    <div className="services-list">
                        <div>
                            <i className="fa-solid fa-code"></i>
                            <h2>Web Designer</h2>
                            <p>A web designer is responsible for creating the design and layout of a website or web pages. Unlike web developers.</p>
                            <a href="#">Learn More</a>
                        </div>
                        <div>
                            <i className="fa-solid fa-crop"></i>
                            <h2>UI/UX Designer</h2>
                            <p>A UI/UX designer is responsible for creating the design and layout of a website or web pages. Unlike web developers.</p>
                            <a href="#">Learn More</a>
                        </div>
                        <div>
                            <i className="fa-brands fa-app-store"></i>
                            <h2>App Designer</h2>
                            <p>An app designer is responsible for creating the design and layout of a website or web pages. Unlike web developers.</p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="portfolio">
                <div className="container">
                    <h1 className="sub-title">My Work</h1>
                    <div className="work-list">
                        <div className="work">
                            <img src={work1} alt="Work 1" />
                            <div className="layer">
                                <h3>Social Media App</h3>
                                <p>The App Connects You To The Talented People Around The World. Download It From Play Store</p>
                                <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div className="work">
                            <img src={work2} alt="Work 2" />
                            <div className="layer">
                                <h3>Media App</h3>
                                <p>The App Connects You To The Talented People Around The World. Download It From Play Store</p>
                                <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div className="work">
                            <img src={work3} alt="Work 3" />
                            <div className="layer">
                                <h3>Online Shopping App</h3>
                                <p>The App Connects You To The Talented People Around The World. Download It From Play Store</p>
                                <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn">See More</a>
                </div>
            </div>

            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="sub-title">Contact Me</h1>
                            <p><i className="fa-solid fa-paper-plane"></i> pratyushkpt@gmail.com</p>
                            <p><i className="fa-solid fa-square-phone"></i> +91-8310846925</p>
                            <div className="social-icons">
                                <a href=""><i className="fa-brands fa-facebook"></i></a>
                                <a href=""><i className="fa-brands fa-twitter-square"></i></a>
                                <a href="https://www.instagram.com/_pratyush_suvarna_/?igsh=MTlvNjZmdjFlYnJpbQ%3D%3D&utm_source=qr"><i className="fa-brands fa-instagram"></i></a>
                                <a href=""><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                            <a href="#" className="btn btn2">Download CV</a>
                        </div>
                        <div className="contact-right">
                            <form>
                                <input type="text" name="name" placeholder="Your Name" required />
                                <input type="email" name="email" placeholder="Your Email" required />
                                <textarea name="message" rows="6" placeholder="Your Message"></textarea>
                                <button type="submit" className="btn btn2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="copywrite">
                    <p>Copyright &#169; Pratyush. Website <i className="fa-solid fa-globe"></i> Is Made By Pratyush</p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
