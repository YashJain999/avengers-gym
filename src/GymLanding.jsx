import { React, useState } from 'react';
import Footer from './components/Footer';
import Packages from './components/Packages';
import Header from './components/Header';
import GymGears from './components/GymGears';
import NutritionPlans from './components/NutritionPlans';
import OurTrainers from './components/OurTrainers';
import RegistrationForm from './components/RegistrationForm';
import bg from './assets/images/file.jpg';


const GymLanding = () => {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (

    <>
      <nav id="navbar-example2" className='w-100 sticky-top d-flex flex-row align-items-center justify-content-between bg-success'>
        <img src={bg} alt='logo' style={{ backgroundRepeat: 'no-repeat', }} />
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link text-white fs-5 fw-bold" href="#scrollspyHeading1">Welcome</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-5 fw-bold" href="#scrollspyHeading2">Our Trainers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-5 fw-bold" href="#scrollspyHeading3">Accessories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-5 fw-bold" href="#scrollspyHeading4">Nutrition Plans</a>
          </li>
          <li class="nav-item" >
            <a class="nav-link text-white fs-5 fw-bold" href="#scrollspyHeading5" >Memberships</a>
          </li>
          <li class="nav-item" >
            <a class="nav-link text-white fs-5 fw-bold" href="#scrollspyHeading6">Schedule</a>
          </li>
        </ul>
      </nav>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        <div id="scrollspyHeading1" style={{ height: "700px" }}>
          <Header showModal={handleShowModal} />
          <RegistrationForm show={showModal} handleClose={handleCloseModal} />
        </div>
        <div id="scrollspyHeading2" style={{ height: "700px" }}>
          <OurTrainers />
        </div>
        <div id="scrollspyHeading3" style={{ height: "700px" }}>
          <GymGears />
        </div>
        <div id="scrollspyHeading4" style={{ height: "700px" }}>
          <NutritionPlans />
        </div>
        <div id="scrollspyHeading5" style={{ height: "700px" }}>
          <Packages />
        </div>
        <div id="scrollspyHeading6" style={{ height: "" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default GymLanding;
