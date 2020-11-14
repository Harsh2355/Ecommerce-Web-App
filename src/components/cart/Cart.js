import Cartlist from './CartList';
import React, { Component } from 'react'
import Title from '../Title';
import {ProductConsumer} from '../../context';
import CartColumn from './CartColumn';
import CartTotal from './CartTotal';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {(value)=>{
                        const {cart}=value;

                        if(cart.length===0){
                            return (
                                <div className="col-10 mx-auto text-center text-capitalize p-5 text-title">
                                    <h1>Your Cart is empty</h1>
                                </div>
                            )
                        }
                        else{
                            return (
                                <section className="p-3" onLoad={()=>value.addTotals()}>
                                    <Title name="YOUR " title="CART" />
                                    <CartColumn />
                                    <Cartlist value={value} />
                                    <CartTotal value={value} history={this.props.history} />
                                </section>
                            )
                        }
                    }
                    }
                </ProductConsumer>
            </section>
        )
    }
}

