import React , { Component } from 'react'
import BlockProducts from '../components/home/block-products-home'
import { connect } from 'react-redux'
import { actionGetProductById } from '../redux/actions'

class Container_Block_Products extends Component{
    render(){
        var {product, getProductById} = this.props
        return(
            <BlockProducts
                product={product}
                getProductById = { getProductById }
            ></BlockProducts>
        )
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        getProductById : id => {
            dispatch(actionGetProductById(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(Container_Block_Products)