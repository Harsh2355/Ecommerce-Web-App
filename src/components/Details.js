import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import { ButtonContainer } from './button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id,company,img,price,title,info,inCart} = value.detailProduct;
                    return(
                        <div className="container p-5">
                            <div className="row">
                                <div className="col-12 mx-auto text-center ">
                                    <h1 className="details-title">{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="prod-image col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="product" />
                                </div>
                                <div className="Prod-text col-10 mx-auto col-md-6 my-5">
                                    <div>
                                        <h2 className="details-type my-3">Model: <span className="details">{title}</span></h2>
                                    </div>
                                    <div>
                                        <h2 className="details-type my-3">Made By: <span className="details">{company}</span></h2>
                                    </div>
                                    <div>
                                        <h2 className="details-type my-3">Price: <span className="details">${price}</span></h2>
                                    </div>
                                    <div>
                                        <h2 className="details-type my-3">
                                            Some Info About The Product:<br />
                                            <span className="details" style={{fontSize:"1.3rem"}}>{info}</span>
                                        </h2>
                                    </div>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer className="my-3 mx-2">
                                                Back To Products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer className="my-3 mx-3" disabled={inCart? true: false}
                                        onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id)
                                        }}>
                                          {inCart ? "InCart" : "Add To Cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
