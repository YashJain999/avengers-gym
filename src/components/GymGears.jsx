import React from 'react'
import ggimage from '../assets/images/equipments.jpg'
const GymGears = ({ scrollspyHeading3 }) => {
  return (
    <div id={scrollspyHeading3} style={{
      height: "100vh",
      // width: "100%",
      backgroundImage:
          `url(${ggimage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
  }}>
  
  <div className='h-100'>

  </div>
  </div>
  )
}

export default GymGears