import React from 'react';

import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor() {
    super();
    this.state={

        products: [
            {
                price:999,
                title:'Mobile Phone',
                qty: 10,
                img:'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                id: 1
            },
            {
                price:99,
                title:'WATCH',
                qty: 15,
                img:'https://media.istockphoto.com/photos/military-style-watch-picture-id650233226?s=612x612',
                id: 2
            },
            {
                price:599,
                title:'Camera',
                qty: 15,
                img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
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

handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty===0){
        return;
    }

    products[index].qty -= 1;

    this.setState({
        products
    })
}

handleDeleteProduct = (id) => {
    const { products} = this.state;
    const items = products.filter(item => item.id !==id);

    this.setState({ products:items })
}
getCartCount = () => {
  const { products } = this.state;
  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })
  return count;
}

getCartTotal = () => {
  const { products } = this.state;
  let cartTotal = 0;

  products.map((product) => {
    cartTotal  = cartTotal + product.qty*product.price ;
  })
  return cartTotal;
}

render() {

  const {products} = this.state;

return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct} 
        />
        <div style= {{fontSize:20, padding : 10}} >TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }

}

export default App;
