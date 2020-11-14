import React, { Component } from 'react';
import styled from 'styled-components';
import {ButtonContainer} from './button';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Modal extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value)=>{
                   
                   const modalOpen = value.modalOpen;
                   const {title,img,price} = value.modalProduct;
                   
                   if(!modalOpen){
                       return null;
                   }
                   else{
                       return (
                       <ModalContainer>
                        <div className="container">
                          <div className="row"> 
                            <div id="modal" className="col-10 mx-auto col-md-6 col-lg-4 text-center p-4" >
                              <p id="m-header">The item has been added to your cart.</p>
                              <img src={img} id="m-img" className="img-fluid" alt="product" />
                              <h5 id="m-title">{title}</h5>
                              <h5 id="m-price">Price:<span style={{color:"black"}}> ${price}</span></h5>
                              <Link to="/">
                                   <ButtonContainer onClick={()=>value.closeModal()}>
                                       Continue Shopping
                                   </ButtonContainer>
                              </Link>
                              <Link to="/cart">
                                   <ButtonContainer onClick={()=>value.closeModal()}>
                                       Go To Cart
                                   </ButtonContainer>
                              </Link>
                            </div>
                           </div>
                        </div> 
                       </ModalContainer>
                       )
                   }
               }}
           </ProductConsumer>
        )
    }
}


const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.8);
    display:flex;
    align-items: center;
    justify-content:center;
    #modal{
        background:var(--mainWhite);
        text-transform:capitalize;
    }
    #m-header{
        font-size:1.4rem;
    }
    #m-title{
        text-transform:uppercase;
        padding:10px 0px;
    }
    #m-price{
        color:var(--mainPink);
        padding-bottom:13px
    }
`;