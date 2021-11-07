import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {
        super();
        this.state={

            product: [
                {
                    price:999,
                    title:'Mobile Phone',
                    qty: 10,
                    img:'',
                    id: 1
                },
                {
                    price:99,
                    title:'WATCH',
                    qty: 15,
                    img:'',
                    id: 2
                },
                {
                    price:599,
                    title:'Camera',
                    qty: 15,
                    img:'',
                    id: 3
                }
            ]
            
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    render () {
        const {product} = this.state;
        
        return(
           <div className="cart">
               {product.map((product) =>{
                   return <CartItem product={product}  key = {product.id}/>
               } )}
            
           
           </div> 
        )
    };
}



export default Cart;