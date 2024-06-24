// components/Footer.jsx
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { BsHouse, BsEnvelope, BsTelephone } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const handleEmailClick = () => {
    const email = 'contact@avengersgym.in';
    const subject = 'Subject';
    const body = 'Body';
    
    const link = document.createElement('a');
    link.href = `mailto:${email}?subject=${subject}&body=${body}`;
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="bg-black">
      <footer className="text-white text-center text-lg-start bg-dark">
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About company</h5>

              <p>
                At Avengers Gym, we believe in empowering you to become the hero
                of your own story. Join us to transform your body, mind, and
                spirit.
              </p>
              <p>
                Our state-of-the-art facilities and expert trainers will help
                you achieve your fitness goals in no time.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Contact Us</h5>
              <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                <li className="mb-3">
                  <span className="fa-li">
                    <i>
                      <BsHouse />
                    </i>
                  </span>
                  <span className="ms-2">
                    123 Fitness Ave, Andheri East, Mumbai, Maharashtra 400053,
                    India
                  </span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i>
                      <BsEnvelope />
                    </i>
                  </span>
                  <span 
            className="ms-2" 
            style={{ textDecoration: 'underline', cursor: 'pointer' }} 
            onClick={handleEmailClick}
          >
            contact@avengersgym.in
          </span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i>
                      <BsTelephone />
                    </i>
                  </span>
                  <span className="ms-2">+91 22 1234 5678</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Opening hours</h5>
              <table className="table text-center text-white">
                <tbody className="fw-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>6am - 10pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>6am - 12am</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>8am - 8pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          className="flex justify-between items-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div className="flex items-sm-right justify-between text-sm-center">
            <a href="https://facebook.com/" className="text-white me-3">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com/" className="text-white me-3">
            <AiFillInstagram />
            </a>
            <a href="https://x.com/?lang=en/" className="text-white me-3">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/" className="text-white me-3">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.youtube.com/" className="text-white me-3">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          <p class="text-sm-center">
            {" "}
            &copy; 2024 Avengers Fitness Gym. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
