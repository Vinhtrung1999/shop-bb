import React , { Component } from 'react'
import ProductDeatail_Img from './productDeatail_Img'
import ProductDeatail_Content from './productDeatail_Content'

class Product extends Component{
    render(){
        var { product } = this.props
        return(
            <div className="row g-0">
                <div className="col-lg-6 col-sm-12">
                    <ProductDeatail_Img product = { product }></ProductDeatail_Img>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <ProductDeatail_Content product = { product }></ProductDeatail_Content>
                </div>
            </div>
        )
    }
}
export default Product