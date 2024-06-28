import { React, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Packages from './components/Packages';
import Header from './components/Header';
import GymGears from './components/GymGears';
import NutritionPlans from './components/NutritionPlans';
import OurTrainers from './components/OurTrainers';
import RegistrationForm from './components/RegistrationForm';
import bg from './assets/images/lougo.png';
import { Offers, HeaderOffer } from './components/Offers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import aos from "aos";
import 'aos/dist/aos.css'

const GymLanding = () => {

  useEffect(() => {
    aos.init({ duration: 1000 });
  }, [])

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const endTime = "2024-07-01T00:00:00";

  return (
    <>
      <HeaderOffer endTime={endTime} />
      <nav id="navbar-example2" className='w-100 sticky-top d-flex flex-row align-items-center justify-content-between bg-secondary bg-gradient shadow-lg '>
        <div className='bg-image'>
          <img src={bg} className="ps-4" alt='logo' style={{ height: '80px' }} />
        </div>
        <ul className="nav nav-pills justify-content-end ">
          <li className="nav-item ">
            <a className=" nav-link text-dark fw-bold" href="#scrollspyHeading1">Home</a>
          </li>
          <li className="nav-item ">
            <a className="  nav-link text-dark  fw-bold" href="#scrollspyHeading2">Our Trainers</a>
          </li>
          <li className="nav-item ">
            <a className=" nav-link text-dark  fw-bold" href="#scrollspyHeading3">Accessories</a>
          </li>
          <li className="nav-item ">
            <a className="  nav-link text-dark  fw-bold" href="#scrollspyHeading4">Nutrition Plans</a>
          </li>
          <li className="nav-item " >
            <a className="  nav-link text-dark  fw-bold" href="#scrollspyHeading5" >Memberships</a>
          </li>
          <li className="nav-item " >
            <a className="  nav-link text-dark  fw-bold" href="#scrollspyHeading6">Schedule</a>
          </li>
        </ul>
      </nav>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
        <div id="scrollspyHeading1" style={{ height: "700px" }}>
          <Header showModal={handleShowModal} />
          <RegistrationForm show={showModal} handleClose={handleCloseModal} />
        </div>
        <div id='scrollspyHeading2' style={{ height: "700px" }}>
          <OurTrainers />
        </div>
        <div id='scrollspyHeading3' style={{ height: "700px" }}>
          <GymGears />
        </div>
        <div id='scrollspyHeading4' style={{ height: "1000px" }}>
          <NutritionPlans />
        </div>
        <div id='scrollspyHeading5' style={{ height: "700px" }}>
          <Packages />
        </div>
        <div style={{ height: "700px" }}>
          <Offers />
        </div>
        <div id='scrollspyHeading6' style={{ height: "" }}>
          <Footer id={"scrollspyHeading6"} />
          <ToastContainer

            position="bottom-right"
            autoClose={false}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </>
  );
}

export default GymLanding;