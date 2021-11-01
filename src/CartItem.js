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
                    <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png"/>
                    <img alt="decrease" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/2734/premium/2734848.png?token=exp=1635774713~hmac=0e212b7fbb3e6b0e8186910d859153f4"/>
                    <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1635774801~hmac=10106ca3b78738d244986e4d46192797"/>

                    
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