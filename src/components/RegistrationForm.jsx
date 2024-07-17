import React from 'react'

const RegistrationForm = ({ show, handleClose }) => {
  const linkstyle = {
    '--bs-icon-link-transform': 'translate3d(0, -.125rem, 0)'
  }


  return (
    <div show={show} onHide={handleClose} className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Registration</h5>
            <button type="button" className="btn-close" onClick={handleClose} data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div class="form-floating mb-3">
                <input type="text" class="form-control border border-primary" id="InputText" placeholder="name@example.com" />
                <label for="InputText" class="form-label">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control border border-primary" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput" class="form-label">Email address</label>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control border border-primary" id="Inputphone" placeholder="name@example.com" />
                <label for="Inputphone" class="form-label">Phone</label>
              </div>
              <div class="form-floating mb-3">
                <h3 for="" class="form-label">Choose Package</h3>
              </div>
              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                <label class="btn btn-outline-primary" for="btnradio1">Monthly</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label class="btn btn-outline-primary" for="btnradio2">Quaterly</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                <label class="btn btn-outline-primary" for="btnradio3">Anually</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                <label class="btn btn-outline-primary" for="btnradio4">1+1</label>
              </div>
              <hr />
              <div class="form-floating mb-3">
                <input type="text" class="form-control border border-primary" id="InputState" placeholder="name@example.com" />
                <label for="InputState" class="form-label">State</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control border border-primary" id="InputCity" placeholder="name@example.com" />
                <label for="InputCity" class="form-label">City</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me</label>
                <p>By checking you agree to our <a class="icon-link icon-link-hover" style={{ linkstyle }} href="#">
                  terms and conditions?
                </a></p>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose} data-bs-dismiss="modal">Close</button>
            <button type="button" onClick={()=>{alert("Thankyou for registering,for further details our gym staff will contact you")}} className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm;