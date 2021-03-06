import React , { Component } from 'react'
import CartItem from './cartItem'
import Total from './total'
import { Link } from 'react-router-dom'
class Cart extends Component{
    constructor(props){
        super(props)
        this.state = {
            animation: false,
            start: true
        }
    }

    onHoverCart = () => {
        this.setState({
            animation: true,
            start: false,
        })
    }

    onUnHoverCart = () => {
        this.setState({
            animation: false,
            start: false
        })
    }

    setStyle = () => {
        if(this.state.start){
            return{
                display: 'none'
            }
        }
        else{
            return {
                display: 'block',
                animation: this.state.animation ? 'cart-show-out 0.3s ease-in' : 'cart-show-in 0.3s ease-in forwards'          
            }
        }
        
    }

    render(){
        return(
            <div className="right-icon-cart" onMouseMove={ this.onHoverCart } onMouseLeave={ this.onUnHoverCart }>
                <Link to="/login" className="cart-tittle">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> <span style={{color:'red'}}>3</span>
                </Link>
                <div className="cart-content" style={ this.setStyle() }>
                    <div className="cart-content-item">
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <Total></Total>
                        <button className="btn-pay">THANH TOÁN</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart