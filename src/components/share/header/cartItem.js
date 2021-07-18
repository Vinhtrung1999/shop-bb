import React , { Component } from 'react'
class CartItem extends Component{
    render(){
        return(
            <div className="cart-item">
                <div className="cart-item-img">
                    <img src="https://bobui.vn/cms/wp-content/uploads/2021/06/angelB-be-back.jpg" width="60vw"></img>
                </div>
                <div className="cart-item-info">
                    <div>ANGEL B BOBUI LOGO TEES/ BONE WHITE</div>
                    <div>1 x 5000000</div>
                </div>
            </div>
        )
    }
}
export default CartItem