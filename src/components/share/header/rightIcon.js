import React , { Component } from 'react'
import Cart from './cart'
import Search from './search'
class RightIcon extends Component{
    render(){
        return(
            <div className="right-icon">
                <Search></Search>
                <Cart></Cart>
            </div>
        )
    }
}
export default RightIcon