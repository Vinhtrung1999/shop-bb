import React , { Component } from 'react'
import Product from '../components/products/productDetail'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Container_Product_Detail extends Component{
    findItemById = () => {
        var { products, match } = this.props
        let product = products.filter(product => product.id === match.params.id)
        return product
    }

    render(){
        if(this.findItemById().length > 0){
            return(
                <div>
                    <Product product={this.findItemById()[0]}></Product>
                </div>
            )
        }
        else{
            return(
                <Redirect to="/notfound"></Redirect>
            )
        }
        
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}



export default connect(mapStateToProps, null)(Container_Product_Detail)