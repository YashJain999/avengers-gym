import React, { useEffect } from 'react'
import RegistrationForm from './RegistrationForm'
import bg from '../assets/images/file.jpg'

const Header = () => {

    const OnClickHandler = () => {
        alert("hi");
        <RegistrationForm />
    }

    useEffect(() => {
        // document.body.style.backgroundImage = `url(${bg})`;
        // document.body.style.backgroundColor = "green"
    })

    return (
        <div className='d-flex flex-column w-100 h-100 align-items-center justify-content-center' style={{ gap: "200px", height: "100%" }} >
            <nav className='w-100 h-auto d-flex flex-row bg-info' style={{}}>
                <div className="w-25 bg-warning" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundColor: "white", padding: "10px" }}></div>
                <ul className="nav justify-content-end fixed-top w-75 ml-50">
                    <li className="nav-item">
                        <a className="nav-link disabled">Our Trainers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" >Accessories</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" >Nutriotion Plans</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" >Memberships</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Schedule</a>
                    </li>
                </ul>
            </nav>
            <main className='w-100 h-100 d-flex flex-column align-items-center justify-content-between p-2 z-0 bg-success'>
                <section className='text-center h-100'>
                    <h4 className=''>Welcome,Namaste,Namaskar</h4>
                    <h5>Become your own LEGEND</h5>
                    <button type="button" onClick={OnClickHandler} className="btn px-5 py-2 mt-3" style={{ background: "#90EE90" }}>Join Today</button>
                    <p>Lorem ipsum, dolor sit amet conpiciatis perferendis nostrum eos ducimus corrupti adipisci illo ipsum soluta dolore sit </p>
                </section>
                <p>Lorem, ipsum dolor sit amet consecte </p>
            </main>
        </div>
    )
}

export default Header