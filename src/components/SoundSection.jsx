import React from "react";


// Feature Listing of the Project - Social Media Analyzer

function SoundSection(){
    return (
        <div className="sound-section wrapper">
        <div className='body'>
            <div className='sound-section-content content'>
                <h2 className='title'>Features of Trend Dekho</h2>
                <p className='text'>Get Extra Power!</p>
                <span className = 'description'>
                📈 Trending Hashtags Analysis - Identify popular hashtags and trends. <br></br>
                📍 Profile Scanning from X - Analyze profiles from specific locations. <br></br>
                👥 Top Influencers and Users - Discover Influencers for Domain/Genre. <br></br>


                </span>
                <ul>
                    <ul className="links">

                    <li>
                        <button className="button">Profile Analyzer</button>
                    </li>
                    <li>
                        <button className="button">Hastag Trend</button>
                    </li>
                    </ul>
                </ul>
            </div>
        </div>
        </div>


    );

}

export default SoundSection;