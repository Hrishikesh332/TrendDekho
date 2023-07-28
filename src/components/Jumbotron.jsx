import React from "react";



function Jumbotron(){
    
    const handleLearnMore = () => {
        const element= document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'

        });
    }
    
    
    
    return (

    <div className='jumbotron-section wrapper'>
        <h2 className='title'>Trend Dekho 👁️</h2>

        <p className='text'>Explore the world in new way</p>
        <span className='description'>
            Looking the digital world in the new and broader way with the Trend Dekho.
        </span>
        <ul className='links'>
            <li>
                <button className='button'>Demo</button>
            </li>
            <li>
                <button className='button'>Github</button>
            </li>
            <li>
                <a className='link' onClick={handleLearnMore}>Learn More</a>
            </li>
        </ul>

    </div>
    );

}

export default Jumbotron;