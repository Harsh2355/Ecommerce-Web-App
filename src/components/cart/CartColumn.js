import React from 'react'

export default function CartColumn() {
    return (
        <div className="fluid-container m-3 cart-container">
            <div className="row">
                <div className="cart-heading col-2  p-2 mx-auto text-center d-none d-lg-block">
                   <h5>Product</h5>
                </div>
                <div className="cart-heading col-2  p-2 mx-auto text-center d-none d-lg-block">
                   <h5>Name of Product</h5>
                </div>
                <div className="cart-heading col-2  p-2 mx-auto text-center d-none d-lg-block">
                   <h5>Price</h5>
                </div>
                <div className="cart-heading col-2  p-2 mx-auto text-center d-none d-lg-block">
                   <h5>Quantity</h5>
                </div>
                <div className="cart-heading col-2  p-2 mx-auto text-center d-none d-lg-block">
                   <h5>Remove</h5>
                </div>
                <div className="cart-heading col-2  p-2 mx-auto text-center d-none d-lg-block">
                   <h5>Total</h5>
                </div>
            </div>
        </div>
    )
}


