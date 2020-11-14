import React from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default function CartTotal({value,history}) {
    const { cartSubTotal,cartTax,cartTotal,clearCart } = value;
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                         <button className="clear-cart-btn" type="button" onClick={()=>clearCart()}>
                            clear cart
                         </button>
                    </Link>
                </div>
                <div className="col-10 mt-3 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <div className="text-title" style={{fontSize:"1.5rem"}}>
                        Subtotal: 
                       <strong style={{color:"black"}}> ${cartSubTotal}</strong>
                    </div>
                </div>
                <div className="col-10 mt-3 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <div className="text-title" style={{fontSize:"1.5rem"}}>
                        Cart Tax: 
                       <strong style={{color:"black"}}> ${cartTax}</strong>
                    </div>
                </div>
                <div className="col-10 mt-3 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <div className="text-title" style={{fontSize:"1.5rem"}}>
                        Total: 
                       <strong style={{color:"black"}}> ${cartTotal}</strong>
                    </div>
                </div> 
                <div className="col-10 mt-3 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
                </div>
            </div>
        </div>
    )
}
