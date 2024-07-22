import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GymGears = ({ scrollspyHeading3 }) => {
  const cardStyle = {
    width: '18rem', 
    height: '30rem',
    position: 'relative', 
  };

  const cards = [
    {
      title: 'MIDI ZIP UP JACKET',
      text: 'Comfortable and stylish zip jacket.',
      imgSrc: 'https://cdn.shopify.com/s/files/1/1367/5207/files/VitalSeamless2.0MidiZipUpJacket-VanillaBrownMarl-B5A9Q-NBD9-1842_0fb5aa6f-eed4-4e49-8ae2-6566e4744a4c_1920x.jpg?v=1701441723',
      link: 'https://row.gymshark.com/products/gymshark-vital-seamless-2-0-midi-zip-up-jacket-vanilla-brown-marl-aw23',
    },
    {
      title: 'SPEED T-SHIRT',
      text: 'Lightweight sports shirt.',
      imgSrc: 'https://cdn.shopify.com/s/files/1/1367/5207/files/SpeedT-ShirtGSBlackA5A9E-BB2J1-1516_c95492df-d032-451d-8ade-8c74b2782475_1920x.jpg?v=1702281418',
      link: 'https://row.gymshark.com/products/gymshark-speed-t-shirt-black-aw23',
    },
    {
      title: 'MEN WALKING SHOES',
      text: 'Stylish walking shoes.',
      imgSrc: 'https://contents.mediadecathlon.com/p1419921/72b461620e3e5ec61db942355362dd66/p1419921.jpg?format=auto&quality=70&f=650x0',
      link: 'https://www.decathlon.in/p/8486177/men-shoes/men-walking-shoes-pw-100-grey?id=8486177&type=p',
    },
    {
      title: "WOMEN'S FITNESS SHOES",
      text: 'Stylish and durable training shoes.',
      imgSrc: 'https://contents.mediadecathlon.com/p2180696/4c0ae5562d7d97056c25143c54adba0b/p2180696.jpg?format=auto&quality=70&f=1024x0',
      link: 'https://www.decathlon.in/p/8645150/women-s-fitness-shoes/women-s-fitness-shoes-520-white-blue?id=8645150&type=p',
    },
    {
      title: 'GYM BAG 30L',
      text: 'Spacious and foldable gym bag.',
      imgSrc: 'https://contents.mediadecathlon.com/p395566/6d52233e77877e40810401a0eb1cd36c/p395566.jpg?format=auto&quality=70&f=650x0',
      link: 'https://www.decathlon.in/p/8200579/gym-bags-and-locks/gym-duffel-bag-30l-fold-down-black?id=8200579&type=p',
    },
    {
      title: 'WEIGHT TRAINING BELT',
      text: 'Supportive belt for weight training.',
      imgSrc: 'https://contents.mediadecathlon.com/p2049369/0193c12bf42258d5ebcff0d924addbe5/p2049369.jpg?format=auto&quality=70&f=650x0',
      link: 'https://www.decathlon.in/p/8649022/gym-gloves-supports/weight-training-belt-with-dual-nylon-closure-black?id=8649022&type=p',
    },
    {
      title: 'TRAINING GLOVES',
      text: 'Comfortable gloves for weight lifting.',
      imgSrc: 'https://contents.mediadecathlon.com/p2314092/43fa2716171dd0354b743a5d41e4b237/p2314092.jpg?format=auto&quality=70&f=650x0',
      link: 'https://www.decathlon.in/p/8595171/gym-gloves-supports/weight-training-comfort-gloves-black?id=8595171&type=p',
    },
    {
      title: 'KNEE SLEEVES',
      text: 'Supportive knee sleeves for lifting.',
      imgSrc: 'https://cdn.shopify.com/s/files/1/1367/5207/files/KneeSleevesBlackI1A2V191.D2-Edit_GB_BK5mm_ea33bb35-73cf-4737-8471-d04e32f4e5dc_1920x.jpg?v=1719333001',
      link: 'https://row.gymshark.com/products/gymshark-knee-sleeves-5mm-black',
    },
    {
      title: 'ROLLER MASSAGE TOOL',
      text: 'Effective roller for muscle massage.',
      imgSrc: 'https://contents.mediadecathlon.com/p2148869/ce26f54593ffb26335f7079902797d5a/p2148869.jpg?format=auto&quality=70&f=650x0',
      link: 'https://www.decathlon.in/p/8613248/sports-massage/massage-tool-100-roller-massage-tool?id=8613248&type=p',
    },
    {
      title: 'GYM KETTLEBELL',
      text: 'Combining strength, cardio and muscle building.',
      imgSrc: 'https://contents.mediadecathlon.com/p2720188/519fbbea2f64b050ff0bc4274b12fed6/p2720188.jpg?format=auto&quality=70&f=650x0',
      link: 'https://www.decathlon.in/p/8354815/gym-equipment/gym-kettlebell-8-kg-black-blue?id=8354815&type=p',
    },
    {
      title: 'PUSH-UP BAR GRIPS',
      text: 'Ergonomic push-up bar grips.',
      imgSrc: 'https://contents.mediadecathlon.com/p2303746/204a9e2840671f1bbbc854c9d50ca5b6/p2303746.jpg?format=auto&quality=70&f=650x0',
      link: 'https://www.decathlon.in/p/8556754/equipment/push-up-bar-grips-500-blue?id=8556754&type=p',
    },
    {
      title: 'ADJUSTABLE HANDGRIP',
      text: 'Enhance the grip to get strong arms.',
      imgSrc: 'https://contents.mediadecathlon.com/p2096055/k$4ecad689cca6e415f3b31120f0983270/adjustable-handgrip-8-40-kg.jpg?format=auto&quality=70&f=320x0',
      link: 'https://www.decathlon.in/p/8517609/hand-grip/adjustable-handgrip-8-40-kg?id=8517609&type=p',
    },
    {
      title: 'LIFTING STRAPS',
      text: 'Strong silicone straps for lifting.',
      imgSrc: 'https://cdn.shopify.com/s/files/1/1367/5207/files/SiliconeLiftingStrapsGSFlyCoralI1A4S-KB03-0139_f5c42f90-7a2f-451d-abaa-4884bf7616d2_1920x.jpg?v=1702281372',
      link: 'https://row.gymshark.com/products/gymshark-silicone-lifting-straps-fly-coral-ss24',
    },
    {
      title: '1L WATER BOTTLE',
      text: 'Durable water bottle.',
      imgSrc: 'https://cdn.shopify.com/s/files/1/1367/5207/products/1LWaterBottleBlack-I2A6T-BBBB20_1920x.jpg?v=1673514742',
      link: 'https://row.gymshark.com/products/gymshark-1l-water-bottle-black-ss23',
    },
    {
      title: 'ACYPRESSURE MAT',
      text: 'Relieves tension with acupressure therapy.',
      imgSrc: 'https://contents.mediadecathlon.com/p2437025/7dda281141d2a6e80810199610ccaaa6/p2437025.jpg?format=auto&quality=70&f=650x0',
      link: 'https://www.decathlon.in/p/8767817/sports-massage/acupressure-mat?id=8767817&type=p',
    },
    
    {
      title: 'QUILTED MINI TOTE',
      text: 'Premium quilted fabric',
      imgSrc: 'https://cdn.shopify.com/s/files/1/1367/5207/files/imageStudioToteSSandyBrownI2A6C-NBRT_1920x.jpg?v=1694075588',
      link: 'https://row.gymshark.com/products/gymshark-quilted-mini-tote-sandy-brown-ss23',
    },
  ];

  const groupedCards = [];
  for (let i = 0; i < cards.length; i += 4) {
    groupedCards.push(cards.slice(i, i + 4));
  }

  return (
    <div id={scrollspyHeading3}>
      <div className='container py-5'>
        <h2 className="text-center m-5">Gym Gears and Accessories</h2>
        <b><h4 className="text-center mb-5">Enjoy exclusive discounts on premium gym gears and accessories with our membership packages.</h4></b>
      <div id="carouselExample1" className="carousel slide px-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {groupedCards.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="row">
                {group.map((card, cardIndex) => (
                  <div className="col-md-3" key={cardIndex}>
                    <div className="card mb-4" style={cardStyle}>
                      <img className="card-img-top rounded mx-auto d-block" src={card.imgSrc} alt="Card cap" />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.text}</p>
                        <a href={card.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary d-flex justify-content-center align-items-center mt-auto">
                          Explore Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default GymGears;