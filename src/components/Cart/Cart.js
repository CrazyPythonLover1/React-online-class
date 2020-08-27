import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart

    const courseStyle = {
        fontSize:"1rem",
        display:"block",
        padding:".4rem .4rem 1rem .4rem"
    }
    

    // Compute the Total Price of the Selected Course 
    // let totalPrice = 0;
    // for(let i =0; i<cart.length; i++) {
    //     const element = cart[i];
    //     const newPrice = element.price;
    //     totalPrice += newPrice;
    // }

    // Another way Compute the Total Price of the Selected Course 
    const totalPrice = cart.reduce((total, course) => total + course.price,0)

    return (
    <div className=" cart mt-3">
        
        <h3 className="text-info"> Cart: {cart.length} </h3>
        {
        cart.map(course=><p style={courseStyle}> 
                            <strong style={{float:"left"}}>{course.title}</strong> 
                            <b style={{display:"block",color:"tomato"}}>Price: ${course.price}</b> 
                        </p> )
        }
        <h6 className="mt-4 mb-4"> Total Price: ${totalPrice.toFixed(2)} </h6>
    </div>
    );
};

export default Cart;