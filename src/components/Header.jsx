import React, { useEffect } from 'react'

const Header = ({showModal}) => {




    return (
        <div className='w-100 h-100'>
            <main className='w-100 h-100 d-flex flex-column align-items-center justify-content-center p-2 z-0 bg-warning'>
                <section className='text-center h-50'>
                    <h4 className=''>Welcome,Namaste,Namaskar</h4>
                    <h5>Become your own LEGEND</h5>
                    <button type="button" class="btn btn-primary px-5 py-2 mt-3" style={{ background: "#90EE90"}} onClick={showModal} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Join Today
                    </button>
                    <p>Lorem ipsum, dolor sit amet conpiciatis perferendis nostrum eos ducimus corrupti adipisci illo ipsum soluta dolore sit </p>
                </section>
                <p>Lorem, ipsum dolor sit amet consecte </p>
            </main>
        </div>
    )
}

export default Header;

