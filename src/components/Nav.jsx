import React from 'react';
import Logo from '../assets/images/logo2.png';
import Search from '../assets/images/search.svg'

function Nav(){
    return (
    <nav className="nav-wrapper">
        <div className='nav-content'>
            <ul className='list-styled'>
                <li>
                <img src={Logo} alt="image" height="45" width="50" />
                </li>
                <li>
                    <a className='link-styled'>Analyzer</a>
                </li>
                <li>
                    <a className='link-styled'>Products</a>
                </li>
                <li>
                    <a className='link-styled'>UseCase</a>
                </li>
                <li>
                    <a className='link-styled'>About Us</a>
                </li>
                <li>
                    <a className='link-styled'>Contact</a>
                </li>
                <li>
                    <a className='link-styled'>Feedback</a>
                </li>
                <li>
                    <img src={Search} alt="Search" />
                </li>
                

            </ul>
        </div>
    </nav> );

}
export default Nav;