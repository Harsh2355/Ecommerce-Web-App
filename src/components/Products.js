import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import styled  from 'styled-components';
import {Link} from 'react-router-dom';

export default class Products extends Component {
    render() {
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-4">
                <div className='card'>
                    <div className="product-container">
                    <ProductConsumer>
                        {(value)=>{
                            return (
                            <div className='prod-image p-5' onClick={()=>{value.handleDetails(id)}}>
                            <Link to="/details">
                                <img src={img} className="card-img-top" alt="product" />
                            </Link>
                            <button className="cardbtn" disabled={inCart? true: false} onClick={()=>{
                                value.addToCart(id);
                                value.openModal(id)}}>
                                {inCart? <p>InCart</p>: <i className="fas fa-cart-plus"></i>}
                            </button>
                        </div>)
                        }}
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="">{title}</p>
                        <span className="text-blue" style={{fontSize:"1.2rem"}}>${price}</span>
                    </div>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper= styled.div`
    .product-container{
        border-color:transparent;
        transition: all 1s linear;
    }    
    .card-footer{
        border-color:transparent;
        background:transparent;
        transition: all 0.3s linear;
    }
    .product-container:hover{
        border: 1px solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
    }
    .product-container:hover .card-footer{
        background:#f4adb6;
    }
    .prod-image{
        position:relative;
        overflow:hidden;
        transition:all 1.0s linear;
    } 
    .product-container:hover .card-img-top{
        transition:all 0.5s linear;
        transform: scale(1.2);
    }
    .cardbtn{
        position:absolute;
        bottom:0px;
        right:0px;
        padding: 5px 10px;
        font-size:1.2rem;
        background:var(--lightBlue);
        color:var(--mainWhite);
        border:none;
        cursor:pointer;
        transform: translate(100%,100%);
        transition:all 0.5s linear;
    }
    .product-container:hover .cardbtn{
        transform:translate(0,0);
    }
    .cardbtn:hover{
        color:var(--mainBlue);
    }
`; 
