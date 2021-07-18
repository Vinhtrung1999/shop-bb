import React , { Component } from 'react'
import ImageHeader from './img-header'
import BlockProducts from './block-products-home'
import BelowContent from './belowContent'
import ImgShop from './img-shop'

class Home extends Component{
    showBlocks = () => {
        let products = this.props.products
        let el = products.map((val, index) => {
            return <BlockProducts
                    key={index}
                    product = { val }
                    ></BlockProducts>
        })

        return el
    }
    render(){
        return(
            <div>
                <ImageHeader></ImageHeader>
                <div className="row g-0 bg-white">
                    <h3 className="text-center" style={{marginTop: '30px'}}>SẢN PHẨM MỚI</h3>
                    { this.showBlocks() }
                </div>
                <ImgShop></ImgShop>
                <BelowContent></BelowContent>
            </div>
        )
    }
}
export default Home