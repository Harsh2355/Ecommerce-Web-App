import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import Product from "./Products";
import Title from './Title';

export default class Productlist extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name={"OUR"} title={"PRODUCTS"} />
                        <div className="row">
                            <ProductConsumer>
                                {(data)=>{
                                    return data.storeProducts.map((product)=>{
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
