import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state={
            price:999,
            title:'Mobile Phone',
            qty: 1,
            img:''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    increaseQuantity = () => {
        //this.state.qty += 1;
        console.log('this', this.state);
        //form1
        // this.setState({
        //     qty: this.state.qty + 1
        // });
        
        //setState form2
        this.setState((prevState)=>{
            return{
                qty:prevState.qty +1
            }
        }
        )
    }
    decreaseQuantity = () => {
        //object destructuring
        //in case if our quantity is 0
        const { qty } = this.state;
        if (qty === 0){
            return;
        }

        //this.state.qty += 1;
        console.log('this', this.state);
        //form1
        this.setState({
             qty: this.state.qty - 1
         });
        
        
    }

    render() {
        const {price, title, qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>{price}</div>
                    <div style={{color:'#777'}}>{qty}</div>
                    <div className="cart-item-action">
                        {/*Buttons */}
                    </div>

                    <img alt="increase" 
                    className="action-icons"
                     src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                     onClick={this.increaseQuantity}
                     />

                    <img alt="decrease" 
                    className="action-icons" 
                    src="https://cdn-icons.flaticon.com/png/512/2734/premium/2734848.png?token=exp=1635774713~hmac=0e212b7fbb3e6b0e8186910d859153f4"
                    onClick={this.decreaseQuantity}
                    />
                    
                    <img alt="delete" 
                    className="action-icons" 
                    src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1635774801~hmac=10106ca3b78738d244986e4d46192797"
                    />

                    
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
      height:110,
      width:110,
      borderRadius: 4,
      background: '#ccc'
    }
  }

export default CartItem;