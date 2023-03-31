import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, logo}= props.product ||{};
   


    return (
        <div className='product'>
           <img src={img} alt="" />
            <div className="logo-container">
                <div className="part-1">
                    <img style={{width: '50px', height: '50px'}} src={logo} alt="" />
                    <h1>fssfcfsfsfsdfsfsfsds</h1>
                </div>
               

            </div>
        
            
           
            
          
        </div>
    );
};

export default Product;
