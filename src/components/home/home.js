import React , { Component } from 'react'
import ImageHeader from './img-header'
import BlockProducts from './block-products-home'
import BelowContent from './belowContent'
import ImgShop from './img-shop'
import { Link } from 'react-router-dom'

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
            <div className="home-page">
                <ImageHeader></ImageHeader>
                <div className="row g-0 bg-white">
                    <h3 className="text-center" style={{marginTop: '30px'}}>SẢN PHẨM MỚI</h3>
                    { this.showBlocks() }
                </div>
                <div className="bg-white text-center">
                    <Link to="/">
                        <button className="btn-all-product">
                            Xem tất cả sản phẩm
                        </button>
                    </Link>    
                </div>
                <ImgShop></ImgShop>
                <BelowContent></BelowContent>
            </div>
        )
    }
}
export default Home