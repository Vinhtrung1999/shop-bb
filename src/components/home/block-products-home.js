import React , { Component } from 'react'
import { Link } from 'react-router-dom'
class BlockProducts extends Component{
    constructor(props){
        super(props)
        this.state = {
            choosedisplay : 'none',
            img : this.props.product.imgMain
        }
    }

    setStyleChoose = () => {
        return {
            display: this.state.choosedisplay
        }
    }

    setHoverMove = (product) => {
        this.setState({
            choosedisplay : 'block',
            img : product.imgChange
        })
    }
    setHoverLeave = (product) => {
        this.setState({
            choosedisplay : 'none',
            img: product.imgMain
        })
    }
    render(){
        var { product } = this.props
        return(

            <div className='col-lg-2 col-md-4 col-sm-6 p-3 product-block' >
                <div className="card" style={{width:"100%"}}>
                    <div
                        className="area-block-img"
                        onMouseMove={ () => this.setHoverMove(product) }
                        onMouseLeave={ () => this.setHoverLeave(product) }
                    >
                        <img src={this.state.img} className="card-img-top block-img"></img>
                        <Link to={`/product/${product.id}`} style={ this.setStyleChoose() }><i className="fa fa-external-link choose" aria-hidden="true"></i></Link>
                    </div>
                    <div className="card-body">
                        <div className="card-title text-center">
                            <Link
                                to={'/product/${product.id}'}
                                className="blockName"
                            >{ product.name }</Link>
                        </div>
                        
                        <div className="card-title text-center">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.price)}</div>                        
                    </div>
                </div>
            </div>

        )
    }
}
export default BlockProducts