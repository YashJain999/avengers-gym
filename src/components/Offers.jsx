// src/components/Offers.jsx

import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Offers.css';
import { Route } from 'react-router-dom';
import Packages from './Packages';

const Offers = () => {
  useEffect(() => {
    // Trigger the notification when the component mounts (page reloads)
    notify();
  }, []);

  const notify = () => {
    toast.info(
      <div className="offer-content">
        <img
          src="https://static.vecteezy.com/system/resources/previews/015/602/891/original/black-background-special-offer-under-line-color-red-vector.jpg"
          height={200}
          width={200}
          alt="image"
        />
        <br />
        <span>Refer a friend and get a free month's membership or discounted personal training sessions!</span>
        <button onClick={handleClick} className="offer-button">DO IT NOW!</button>
        <button className="close-button" onClick={() => toast.dismiss()}>×</button>
      </div>,
      {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        closeButton: false,
        className: 'offer-toast',
      }
    );
  };

  const handleClick = () => {
    // Scroll to Packages section
    const packagesSection = document.getElementById('packages-sectio');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert("Packages section not found.");
    }
  };

  return null; // Component doesn't render anything visible
}

export default Offers;
