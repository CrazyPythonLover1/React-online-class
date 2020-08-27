import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart

    const courseStyle = {
        fontSize:"1rem",
        display:"block",
        padding:".4rem .4rem 2rem .4rem"
    }

    return (
    <div className="">
        
        <h3> Cart: {cart.length} </h3>
        {
        cart.map(course=><p style={courseStyle}> 
                            <strong style={{float:"left"}}>Course:</strong> 
                            {course.title}
                            <b style={{display:"block",float:"left"}}>Price: ${course.price}</b> 
                        </p> )
        }
    </div>
    );
};

export default Cart;