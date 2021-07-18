import React , { Component } from 'react'
import Home from '../components/home/home'
import { connect } from 'react-redux'

class Container_Home extends Component{
    render(){
        var { products } = this.props
        return(
            <div>
                <Home products = { products }></Home>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

export default connect(mapStateToProps, null)(Container_Home)