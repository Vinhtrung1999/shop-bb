import React , { Component } from 'react'
import { Link } from 'react-router-dom'
class DropdownBtn extends Component{

    constructor(props){
        super(props)
        this.state = {
            animation: false,
            start: true,
            sub : false
        }
    }

    setStyle = () => {
        if( !this.state.start ){
            return{
                animation: this.state.animation ? 'dropdown-out 1s' : 'dropdown-in 1s forwards'
            }
        }
        return{
            display: 'none'
        }
        
    }

    setStyleSub = () => {
        return {
            display: this.state.sub ? 'block' : 'none'
        }
        
    }

    setOnClick = () => {
        this.setState({
            animation : !this.state.animation,
            start: false
        })
    }

    setOnClickSub = () => {
        this.setState({
            sub : !this.state.sub
        })
    }

    render(){
        return(
            <div className="dropdown">
                <button className="dropdown-tittle" onClick={ this.setOnClick }>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div style={ this.setStyle() } className="dropdown-content">
                        <button className='link-dropdown-content show-link-products' onClick={ this.setOnClickSub }>SHOP</button>
                        <div style={ this.setStyleSub() } className="dropdown-sub-content">
                                <Link className='link-dropdown-sub-content' to="">ALL PRODUCTS</Link>
                                <Link className='link-dropdown-sub-content' to="">TOPS</Link>
                                <Link className='link-dropdown-sub-content' to="">BOTTOMS</Link>
                                <Link className='link-dropdown-sub-content' to="">OUTERWEAR</Link>
                                <Link className='link-dropdown-sub-content' to="">DENIM</Link>
                                <Link className='link-dropdown-sub-content' to="">ACCESSORIES</Link>
                        </div>
                        <Link className='link-dropdown-content' to="">SALE</Link>
                        <Link className='link-dropdown-content' to="/member">MEMBER</Link>
                        <Link className='link-dropdown-content' to="/login">ĐĂNG NHẬP / ĐĂNG KÝ</Link>
                   
                </div>
            </div>
        )
    }
}
export default DropdownBtn