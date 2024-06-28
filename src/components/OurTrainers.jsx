import React from 'react';
import './OurTrainers.css';
import gt1 from '../assets/images/gymtrainer1.png';
import gt2 from '../assets/images/gymtrainer2-m.png';
import gt3 from '../assets/images/gymtrainer3.png';
import gt4 from '../assets/images/gymtrainer4.jpg';
import gt5 from '../assets/images/gymtrainer5.jpg';
import gt6 from '../assets/images/gymtrainer6-m.jpg';
import gt7 from '../assets/images/gymtrainer7-m.jpg';
import gt8 from '../assets/images/gymtrainer8.jpg';
import gt9 from '../assets/images/gymtrainer9-m.jpg';

const OurTrainers = ({ scrollspyHeading2 }) => {

  return (
    <div className='d-flex flex-cloumn w-100 mh-100' id={scrollspyHeading2} style={{}}>
      <div data-aos="zoom-out" className='w-25 d-flex flex-column justify-content-center'>
        <h1 className='text-center text-uppercase fw-bold py-3 px-4 bg-white'>Our Trainers</h1>
        <span><i><h2 className='text-center fw-bold py-3 px-4 bg-white'>Get trained from our well experienced Trainers</h2></i></span>
      </div>
      <div id="carouselExample" class="carousel slide mt-5 w-75">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="wrapper d-flex flex-row">
              <div class="card m-2 shadow p-3 bg-body-tertiary rounded border border-0">
                <div className="image-wrapper">
                  <img src={gt1} alt="trainer 1" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Jessica Harper</h5>
                  <p class="card-text">Jessica is a certified personal trainer with over 10 years of experience in strength training and HIIT workouts. Her passion lies in helping clients achieve their fitness goals through personalized and dynamic exercise routines.</p>
                </div>
              </div>
              <div class="card m-2 shadow p-3 bg-body-tertiary rounded border border-0">
                <div className="image-wrapper">
                  <img src={gt2} alt="trainer 2" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">James Wilson</h5>
                  <p class="card-text">James is a bodybuilding champion and strength training coach with a decade of experience. His expertise lies in designing weightlifting programs that build muscle mass and enhance physical strength.</p>
                </div>
              </div>
              <div class="card m-2 shadow p-3  bg-body-tertiary rounded border border-0">
                <div className="image-wrapper">
                  <img src={gt3} alt="trainer 3" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Emily Johnson</h5>
                  <p class="card-text">Emily specializes in yoga and pilates, with a focus on improving flexibility, balance, and mental well-being. With her calm demeanor and expert guidance, she helps clients find their inner peace and physical strength.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="wrapper d-flex flex-row">
              <div class="card m-2 shadow p-3 bg-body-tertiary rounded border border-0">
                <div className="image-wrapper">
                  <img src={gt4} alt="trainer 4" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Sophia Martinez</h5>
                  <p class="card-text">Sophia is a nutritionist and fitness coach who excels in creating holistic fitness plans. She combines strength training with dietary advice to help clients achieve sustainable weight loss and muscle gain.</p>
                </div>
              </div>
              <div class="card m-2 shadow p-3 bg-body-tertiary rounded border border-0">
                <div className="image-wrapper">
                  <img src={gt5} alt="trainer 5" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Olivia Brown</h5>
                  <p class="card-text">Olivia is a cardio fitness expert with a background in marathon running and endurance sports. She motivates clients to push their limits and improve their cardiovascular health through fun and challenging cardio workouts.</p>
                </div>
              </div>
              <div class="card m-2 shadow p-3 bg-body-tertiary rounded border border-0">
                <div className="image-wrapper">
                  <img src={gt6} alt="trainer 6" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Michael Taylor</h5>
                  <p class="card-text">Michael is a former professional athlete turned fitness trainer, specializing in sports conditioning and agility training. He helps clients improve their performance in sports and everyday activities through targeted exercises.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="wrapper d-flex flex-row">
              <div class="card m-2 shadow p-3 bg-body-tertiary rounded border border-0">
                <div className="image-wrapper">
                  <img src={gt7} alt="trainer 7" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">David Anderson</h5>
                  <p class="card-text">David is a certified personal trainer with a focus on functional fitness and mobility. He creates customized workouts that improve clients' overall functionality and reduce the risk of injury.</p>
                </div>
              </div>
              <div class="card m-2 shadow p-3 bg-body-tertiary rounded border border-0">
                <div className="image-wrapper">
                  <img src={gt8} alt="trainer 8" />
                </div>
                <div class="card-body">
                  <h5 class="card-title"> Ava Davis</h5>
                  <p class="card-text">Ava is a certified personal trainer and group fitness instructor known for her high-energy Zumba and dance fitness classes. Her enthusiasm and positive attitude make every workout feel like a party.</p>
                </div>
              </div>
              <div class="card m-2 shadow p-3 bg-body-tertiary rounded border border-0">
                <div className="image-wrapper">
                  <img src={gt9} alt="trainer 9" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Daniel Thompson</h5>
                  <p class="card-text">Daniel is a martial arts expert and fitness coach with a black belt in Taekwondo. He combines martial arts techniques with strength and cardio workouts to create unique and effective fitness programs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bg-primary rounded" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon bg-primary rounded" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div >
    </div >
  )
}

export default OurTrainers;