import React , { Component } from 'react'
class ProductDeatail_Img extends Component{
    constructor(props){
        super(props)
        this.state = {
            imgShow : this.props.product.img[0]
        }
    }

    showImgElment = () => {
        var { product } = this.props
        let elm = product.img.map((val, index) => {
            return <img
                    key={ index }
                    src={ val }
                    onClick={ () => this.onChangeImg(val) }
                ></img>
        })

        return elm
    }

    onChangeImg = img => {
        this.setState({imgShow: img})
    }

    render(){
        return(
            <div className="img-block">
                <div className="img-show">
                    <img src={ this.state.imgShow }></img>
                </div>
                <div className="img-qty">
                    { this.showImgElment() }
                </div>
            </div>
        )
    }
}
export default ProductDeatail_Img