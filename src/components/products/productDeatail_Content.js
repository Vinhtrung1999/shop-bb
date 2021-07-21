import React , { Component } from 'react'
class ProductDeatail_Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            display : false,
            active : '',
            mess: 'VUI LÒNG CHỌN KÍCH THƯỚC'
        }
    }

    setActive = val => {
        this.setState({
            active : val,
            mess: 'THÊM VÀO GỎI HÀNG'
        })
    }

    showSize = () => {
        var { product } = this.props
        var elm = product.size.map((val, index) => {
            return <span
                key={index}
                className={val === this.state.active ? 'active-custom' : ''}
                onClick={ () => this.setActive(val) }
            >{val}</span>
        })

        return elm
    }

    setStyle = () => {
        return {
            display: this.state.display ? 'block' : 'none'
        }
    }

    showContent = () => {
        this.setState({
            display : !this.state.display
        })
    }

    render(){
        var { product } = this.props
        return(
            <div className="content-block">
                <div className="text-custom">{ product.name }</div>
                <div className="text-custom">{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.price) }</div>
                <div className="text-custom pt-5">CHỌN KÍCH CỠ</div>
                <div className="item-size">
                    { this.showSize() }

                </div>
                <div>
                    <button type="button" disabled={this.state.active ? false : true} className={this.state.active ? 'btn-purchase' : 'btn-purchase-empty'}>{ this.state.mess }</button>
                </div>
                <div className="drop">
                    <div className="drop-tittle text-custom" onClick={ this.showContent }>CHI TIẾT SẢN PHẨM</div>
                    <div className="drop-content" style={ this.setStyle() }>
                        <ul>
                            <li>PHẦN VẢI CHÍNH: 100% COTTON</li>
                            <li>PHẦN BO CỔ: 100% COTTON</li>
                            <li>HỌA TIẾT BEBIBO TRÀN IN KTS</li>
                            <li>HỌA TIẾT LOGO BOBUI THÊU</li>
                            <li>NÚT KHUY BOBUI</li>
                            <li>FORM OVERSIZE</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default ProductDeatail_Content