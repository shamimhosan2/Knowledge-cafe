import React from 'react';
import logo from '../images/istockphoto-1361217779-612x612.jpg'
import './Header.css'
const Header = () => {
    return (
        <div className='container-header'>
            <h2>Knowledge Cafe</h2>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;
//import logo from '../images/Logo.svg'