import React from 'react'

export default function CartItem({item,value}) {
    const {id,title,img,price,total,count} = item;
    return (
        <div className="row my-1 text-capitalize text-center"> 
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:"5rem",height:"5rem"}} className="img-fluid" alt="product" />
            </div>
            <div className="col-10 mb-2 mx-auto col-lg-2">
                <span className="d-lg-none">Product: </span>
                 {title}
            </div>
            <div className="col-10 mb-2 mx-auto col-lg-2">
                <span className="d-lg-none">Price: </span>
                 ${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 mx-2 mb-2">
                <div className="d-flex justify-content-center">
                    <button className="btn mx-1 btn-pink" onClick={()=>value.changeCount(id,"decrement")}>
                      -
                    </button>
                    <span className="btn-pink px-3 py-2">
                      {count}
                    </span>
                    <button className="btn mx-1 btn-pink" onClick={()=>value.changeCount(id,"increment")}>
                      +
                    </button> 
                </div>
            </div>
            <div className="col-10 mb-2 mx-auto col-lg-2 cart-icon" onClick={()=>value.removeItem(id)}>
                <i className="fas fa-trash"></i>
            </div>
            <div className="col-10 mb-5 mx-auto col-lg-2">
                <strong> Item total: </strong>
                 ${total}
            </div>
        </div>
    )
}
