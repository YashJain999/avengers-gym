import React, { useRef } from "react";
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
import emailjs from 'emailjs-com';

const Footer = ({ scrollspyHeading6 }) => {
  const form = useRef();

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

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_ds1eji1', 'template_5jh8xzb', e.target, 'sLGyyOhlsx3mHbEuK')
      .then(
        (result) => {
          alert('SUCCESS!.');
          window.location.reload();
        },
        (error) => {
          alert('FAILED... Please try again later.', error.text);
          console.error(error.text);
        }
      );
  };

  return (
    <div id={scrollspyHeading6} className="bg-black">
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
                    <td>Mon - Sun:</td>
                    <td>6am - 9pm</td>
                  </tr>
                </tbody>
              </table>
              <h5 className="text-uppercase mb-4">Feedback</h5>
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <textarea className="form-control" id="comment" placeholder="Comments" name="message"></textarea>
                </div>
                <br />
                <button type="submit" className="btn btn-outline-secondary">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
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
          <p className="text-sm-center">
            {" "}
            &copy; 2024 Avengers Fitness Gym. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;