import React , { Component } from 'react'
import Products from '../components/products/products'
import { connect } from 'react-redux'

class Container_products extends Component{
    render(){
        var {products} = this.props
        return(
            <div>
                <Products products={ products }></Products>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}
export default connect(mapStateToProps,null)(Container_products)