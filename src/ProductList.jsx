import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import './ProductList.css'
import CartItem from './CartItem';
import plantsArray from './PlantArray';
import { addItem } from './CartSlice';

function ProductList() {
    const [showCart, setShowCart] = useState(false); 
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();

     
   const styleObj={
    backgroundColor: '#4CAF50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignIems: 'center',
    fontSize: '20px',
   }
   const styleObjUl={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
   }
   const styleA={
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
   }
   const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true); // Set showCart to true when cart icon is clicked
};
const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
    setShowCart(false); // Hide the cart when navigating to About Us
};

   const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };


  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
       ...prevState,
       [product.name]: true, // Set the product name as key and value as true to indicate it's added to cart
     }));
  };

    return (
        <div>
             <div className="navbar" style={styleObj}>
            <div className="tag">
               <div className="luxury">
               <img src="http://localhost:3333/eco-5465432_1280.png" alt="" />
               <a href="/" style={{textDecoration:'none'}}>
                        <div>
                    <h3 style={{color:'white'}}>Paradise Nursery</h3>
                    <i style={{color:'white'}}>Where Green Meets Serenity</i>
                    </div>
                    </a>
                </div>
              
            </div>
            <div style={styleObjUl}>
                <div> <a href="#" onClick={(e)=>handlePlantsClick(e)} style={styleA}>Plants</a></div>
                <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg></h1></a></div>
            </div>
        </div>
        {!showCart? (
        <div className="product-grid">

            { JSON.stringify(addedToCart) }

        {plantsArray.map((category, index) => (
            <div key={index}>
                <h1><div>{category.category}</div></h1>
                <div className="product-list">
                    {category.plants.map((plant, plantIndex) => (
                    <div className="product-card" key={plantIndex}>
                        <img className="product-image" src={plant.image} alt={plant.name} />
                        <div className="product-title">{plant.name}</div>
                        {/*Similarly like the above plant.name show other details like description and cost*/}
                        <button  className="product-button" onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                    </div>
                    ))}
                </div>
            </div>
            ))}



        </div>
 ) :  (
    <CartItem onContinueShopping={handleContinueShopping}/>
)}
    </div>
    );
}

export default ProductList;
