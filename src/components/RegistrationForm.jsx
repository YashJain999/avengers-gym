import React, { useState } from 'react';

const RegistrationForm = ({ show, handleClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleThankYouModalClose = () => {
    setFormSubmitted(false);
    handleClose();
  };

  const linkstyle = {
    '--bs-icon-link-transform': 'translate3d(0, -.125rem, 0)'
  };

  return (
    <>
      <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Registration</h5>
              <button type="button" className="btn-close" onClick={handleClose} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleFormSubmit}>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control border border-primary" id="InputText" placeholder="name@example.com" />
                  <label htmlFor="InputText" className="form-label">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control border border-primary" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput" className="form-label">Email address</label>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control border border-primary" id="Inputphone" placeholder="name@example.com" />
                  <label htmlFor="Inputphone" className="form-label">Phone</label>
                </div>
                <div className="form-floating mb-3">
                  <h3 htmlFor="" className="form-label">Choose Package</h3>
                </div>
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
                  <label className="btn btn-outline-primary" htmlFor="btnradio1">Monthly</label>

                  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                  <label className="btn btn-outline-primary" htmlFor="btnradio2">Quarterly</label>

                  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                  <label className="btn btn-outline-primary" htmlFor="btnradio3">Annually</label>

                  <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" />
                  <label className="btn btn-outline-primary" htmlFor="btnradio4">1+1</label>
                </div>
                <hr />
                <div className="form-floating mb-3">
                  <input type="text" className="form-control border border-primary" id="InputState" placeholder="name@example.com" />
                  <label htmlFor="InputState" className="form-label">State</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control border border-primary" id="InputCity" placeholder="name@example.com" />
                  <label htmlFor="InputCity" className="form-label">City</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me</label>
                  <p>By checking you agree to our <a className="icon-link icon-link-hover" style={{ linkstyle }} href="#">
                    terms and conditions?
                  </a></p>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose} data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <div className={`modal fade ${formSubmitted ? 'show' : ''}`} style={{ display: formSubmitted ? 'block' : 'none' }} id="thankYouModal" tabIndex="-1" aria-labelledby="thankYouModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="thankYouModalLabel">Thank You for Registering!</h5>
              <button type="button" className="btn-close" onClick={handleThankYouModalClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Thank you for your registration. The gym staff will contact you soon.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleThankYouModalClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;