import React , { Component } from 'react'
import ImageHeader from './img-header'
import Container_Block_Products from '../../containers/Container_Block_Products'
import BelowContent from './belowContent'
import ImgShop from './img-shop'
import { Link } from 'react-router-dom'

class Home extends Component{
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
            <div className="home-page">
                <ImageHeader></ImageHeader>
                <div className="bg-white">
                    <h3 className="text-center" style={{paddingTop: '30px'}}>SẢN PHẨM MỚI</h3>
                    <div className="product-content">
                        <div className="row g-0 product-top">
                            { this.showBlocks() }
                        </div>
                        <div className="row g-0 product-top">
                            { this.showBlocks() }
                        </div>
                    </div>
                </div>
                <div className="bg-white text-center">
                    <Link to="/shop">
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