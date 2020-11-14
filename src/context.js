import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data';

const ProductContext= React.createContext();

export default class ProductProvider extends Component {
    state={
        storeProducts:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
    }

    componentDidMount(){
        this.setProduct();
    }
    //try later to push item 
    setProduct= ()=>{
        let tempProduct=[]
        storeProducts.forEach((item)=>{
            let singleItem={...item};
            tempProduct=[...tempProduct,singleItem];
        });
        this.setState({
            storeProducts:tempProduct,
        });
    }

    getItem = (id)=>{
       const product= this.state.storeProducts.find(item => item.id===id);
       return product;
    }

    handleDetails = (id)=>{
        let product= this.getItem(id);
        this.setState({
        detailProduct:product
        });
    }

    addToCart = (id)=>{
        const product = this.getItem(id);
        product.inCart=true;
        product.count=1;
        product.total=product.price;
        this.setState({
            cart:[...this.state.cart,product],
        });

        /*const tempProducts=[...this.state.storeProducts];
        const index = tempProducts.indexOf(this.getItem(id));
        let product= tempProducts[index];
        product.inCart=true;
        product.count=1;
        product.total=product.price;
        this.setState(()=>{
            return {storeProducts:tempProducts, cart:[...this.state.cart,product]}
        });*/ 
    }

    openModal = (id)=>{
        const product= this.getItem(id);
        this.setState({
            modalOpen:true,
            modalProduct:product,
        });
    }

    closeModal = ()=>{
        this.setState({
            modalOpen:false
        });
    }

    changeCount = (id,operation)=>{
        let cart = [...this.state.cart];
        let newCart = [];
        cart.map((item)=>{
           if(item.id===id){
               if(operation === "increment"){
                   item.count+=1;
               }
               else if(operation === "decrement" && item.count !== 1){
                   item.count-=1;
               }
               item.total=item.price*item.count;
               newCart.push(item); 
           }
           else{
               newCart.push(item);
           }
        });
        this.setState({
            cart:newCart,
        }, ()=>{
            this.addTotals();
        })
    }

    
    removeItem = (id)=>{
        let tempProduct = [...this.state.storeProducts];
        let tempCart = [...this.state.cart];
        tempCart= tempCart.filter((item)=>
            item.id!==id
        );
        let index = tempProduct.indexOf(this.getItem(id));
        let removedProduct = tempProduct[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState({
            cart:[...tempCart],
            storeProducts:[...tempProduct]
        },()=>{
            this.addTotals();
        })
    }

    clearCart = ()=>{
        this.setState({
            cart:[],
        }, ()=>{
             this.setProduct();
             this.setState({
                cartSubTotal:0,
                cartTax:0,
                cartTotal:0,
            })
        });
    }

    addTotals = ()=>{
        let subtotal = 0;
        this.state.cart.map((item)=>{
            subtotal+=item.total;
        });
        let temptax = (subtotal * 0.1) ;
        let tax = parseFloat(temptax).toFixed(2);
        let total = subtotal + parseFloat(tax);
        this.setState({
            cartSubTotal:subtotal.toFixed(2),
            cartTax:tax,
            cartTotal:total.toFixed(2),
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                changeCount:this.changeCount,
                removeItem:this.removeItem,
                clearCart:this.clearCart,
                addTotals:this.addTotals,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer}
