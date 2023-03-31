import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, time, logo}= props.product ||{};
   


    return (
        <div className='product'>
           <img src={img} alt="" />
            <div className="logo-container">
                <div className="part-1">
                    <img style={{width: '50px', height: '50px'}} src={logo} alt="" />
                    <div className="logo-name">
                        <h3>{name}</h3>
                        <p>{time}</p>
                    </div>
                </div>
               

            </div>
        
            
           
            
          
        </div>
    );
};

export default Product;
