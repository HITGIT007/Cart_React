import React from 'react';

class CartItem extends React.Component {
    

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
        const {price, title, qty} = this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs.{price}</div>
                    <div style={{color:'#777'}}>{qty}</div>
                    
                    <div className="cart-item-action">
                        <img alt="increase" 
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        onClick={this.increaseQuantity}
                        />

                        <img alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={this.decreaseQuantity}
                        />
                        
                        <img alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
                        />
                        
                    </div>

                    

                    
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