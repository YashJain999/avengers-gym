import React, { useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Offers.css';


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
          alt="Special Offer"
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
    const packagesSection = document.getElementById('packages-section'); // Corrected ID
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert("Packages section not found.");
    }
  };

  return null; // Component doesn't render anything visible
}

const HeaderOffer = ({endTime}) => {
  const timeRemaining = ()=> {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft = {};

    if (difference > 0){
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(timeRemaining());
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeLeft(timeRemaining());
    }, 1000);

    return() => clearTimeout(timeoutId);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
      }
      timerComponents.push(
        <span key={interval}>{timeLeft[interval]}{interval} {""}</span>
      );
      });
  return (
    <div className='text-center bg-warning w-100 h-100 py-1'>
      <b>Limited Period Offer</b> | <i><b>1+1 Membership only @35,000/-</b></i> | <b style={{color: 'red'}}>Offer Ends in {timerComponents.length ?timerComponents:<span>Offer has ended!</span>}</b>
    </div>
  );
};

export { Offers, HeaderOffer }; 
