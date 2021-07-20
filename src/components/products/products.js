import React , { Component } from 'react'
import Container_Block_Products from '../../containers/Container_Block_Products'
class Products extends Component{

    showBlocks = () => {
        let products = this.props.products
        let el = products.map((val, index) => {
            return <Container_Block_Products
                    key={index}
                    product = { val }
                    ></Container_Block_Products>
        })

        return el
    }

    render(){
        return(
            <div>
                <div className="row g-0 mt-5 mb-5">
                    { this.showBlocks() }
                </div>
            </div>
        )
    }
}
export default Products