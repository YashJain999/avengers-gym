import headerimg from '../assets/images/headerimg.jpg';
import React, {useState, useEffect} from 'react';

const Header = ({ showModal ,ok}) => {
    const [welcome, setWelcome] = useState("");
    const [isdelete, setDelete] = useState(false);
    const [loop, setLoop] = useState(0);
    const [speed, setSpeed] = useState(150);

    const greet = ["Welcome", "यहाँ स्वागत है","येथे स्वागत आहे"];

    useEffect(() =>
        {
            let timeout;
                const handleWelcomeMessage = () => { 
                const i = loop % greet.length;
                const Text = greet[i];

                if(isdelete) {
                    setWelcome((prev) => Text.substring(0,prev.length - 1));
                }
                else{
                    setWelcome((prev) => Text.substring(0,prev.length + 1));
                }

                if(!isdelete && welcome === Text){
                    timeout = setTimeout(() => setDelete(true), 1000);
                    setSpeed(150);
                }
                else if(isdelete && welcome === ""){
                    setDelete(false);
                    setLoop(loop + 1);
                    setSpeed(150);
                }
                else{
                    timeout = setTimeout(handleWelcomeMessage, speed);
                }
            };
            timeout = setTimeout(handleWelcomeMessage, speed);
            return () => clearTimeout(timeout);
        },
        [isdelete, loop, speed, welcome]
    );
  
    return (
        <div id={ok} className='w-100 h-100'>
            <main className='w-100 h-100 d-flex flex-column align-items-center justify-content-center p-2 z-0' style={{
                // height: "100vh",
                // width: "100%",
                backgroundImage:
                    `url(${headerimg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
                <section className='text-center h-50'>
                    <h1 className='text-center text-bold'>{welcome}</h1>
                    <h5><i>Become your own LEGEND</i></h5>
                    <button type="button" className="btn btn-primary px-5 py-2 mt-3" style={{ }} onClick={showModal} data-bs-toggle="modal" data-bs-target="#exampleModal">
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
