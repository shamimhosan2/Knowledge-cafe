import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, time, date,logo}= props.product;
   


    return (
        <div className='product'>
           <img src={img} alt="" />
            <div className="logo-container">
                <div className="part-1">
                    <img style={{width: '50px', height: '50px'}} src={logo} alt="" />
                    <div className="logo-name">
                        <h3>{name}</h3>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="part-2">
                    <p>{time}</p>
                </div>
               

            </div>
            <h2>{title}</h2>
            <p>{tag}</p>
            <a href="#">Mark as read</a>

        
            
           
            
          
        </div>
    );
};

export default Product;
