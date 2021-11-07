import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {
        super();
        this.state={

            products: [
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
        
    }
    handleIncreaseQuantity = (product) => {
        
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            products
        })
    }
    render () {
        const {products} = this.state;
        
        return(
           <div className="cart">
               {products.map((product) =>{
                   return <CartItem 
                   product={product}  
                   key = {product.id}
                   onIncreaseQuantity={this.handleIncreaseQuantity}
                   />
               } )}
            
           
           </div> 
        )
    };
}



export default Cart;