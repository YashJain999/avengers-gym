// src/Packages.js
import React from "react";
import "./Packages.css";
import { BsCheck} from "react-icons/bs";
import HoverableIcon from "./HoverableIcon";

const Packages = ({scrollspyHeading5}) => {
  return (
    <div id={scrollspyHeading5} className="d-flex flex-column">
      <div className="packages-description mt-5">
        <h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="mt-5">Choose the Subscription That's Right for You !!</h2>
        <ul className="benefits-list">
          <li><BsCheck /> Unlimited access to all gym equipment, cardio machines, weight training areas, and other facilities.</li>
          <li><BsCheck /> Change or cancel your plan anytime.</li>
        </ul>
      </div>
      <div className="packages-container">
        <table className="table table-hover table-dark table-responsive table-borderless">
        <caption><sup>1</sup> Unlimited access to yoga, Zumba, Pilates, spinning, and other group classes. <br />
        <sup>2</sup> Secure locker facilities for storing personal belongings during workouts. <br /></caption>
          <thead>
            <tr>
              <th scope="col">Facilities</th>
              <th scope="col">Monthly</th>
              <th scope="col">Quarterly</th>
              <th scope="col">Annual</th>
              <th scope="col">1+1 Membership</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Personal Training Sessions</th>
              <td>1 Session</td>
              <td>4 Sessions (1 per month)</td>
              <td>12 Sessions (1 per month)</td>
              <td>24 Sessions (1 session per person in a month)</td>
            </tr>
            <tr>
              <th scope="row">Access to All Gym Facilities</th>
              <td><HoverableIcon iconType="check" /></td>
              <td><HoverableIcon iconType="check" /></td>
              <td><HoverableIcon iconType="check" /></td>
              <td><HoverableIcon iconType="check" /></td>
            </tr>
            <tr>
              <th scope="row">Group Classes <sup>1</sup></th>
              <td><HoverableIcon iconType="check" /></td>
              <td><HoverableIcon iconType="check" /></td>
              <td><HoverableIcon iconType="check" /></td>
              <td><HoverableIcon iconType="check" /></td>
            </tr>
            <tr>
              <th scope="row">Locker Use <sup>2</sup></th>
              <td><HoverableIcon iconType="check" /></td>
              <td><HoverableIcon iconType="check" /></td>
              <td><HoverableIcon iconType="check" /></td>
              <td><HoverableIcon iconType="check" /></td>
            </tr>
            <tr>
              <th scope="row">Priority Booking for Classes</th>
              <td><HoverableIcon iconType="cross" /></td>
              <td><HoverableIcon iconType="cross" /></td>
              <td><HoverableIcon iconType="check" /></td>
              <td><HoverableIcon iconType="check" /></td>
            </tr>
            <tr>
              <th scope="row">Discount on Gym Gear and Supplements</th>
              <td><HoverableIcon iconType="cross" /></td>
              <td><HoverableIcon iconType="cross" /></td>
              <td>10%</td>
              <td>15%</td>
            </tr>
            <tr>
              <th scope="row">Pricing</th>
              <td><i className="pricing">₹2,000</i></td>
              <td><i className="pricing">₹5,500</i></td>
              <td><i className="pricing">₹20,000</i></td>
              <td><i className="pricing">₹35,000</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Packages;
