import React , { Component } from 'react'
import { Link } from 'react-router-dom'
class BlockProducts extends Component{
    constructor(props){
        super(props)
        this.state = {
            choosedisplay : 'none',
            backgroundImage : this.props.product.imgMain
        }
    }
    setStyleBlockImg = () => {
        return {
            backgroundImage: `url(${this.state.backgroundImage})`,
            height: '310px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',

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
            backgroundImage : product.imgChange
        })
    }
    setHoverLeave = (product) => {
        this.setState({
            choosedisplay : 'none',
            backgroundImage: product.imgMain
        })
    }

    render(){
        var { product } = this.props
        return(

            <div className='col-lg-2 col-md-6 col-sm-12 p-3' >
                <div className="card" style={{width:"100%"}}>
                    <div
                        className="area-block-img"
                        onMouseMove={ () => this.setHoverMove(product) }
                        onMouseLeave={ () => this.setHoverLeave(product) }
                    >
                        <div style={ this.setStyleBlockImg() }></div>
                        {/* <img src="https://bobui.vn/cms/wp-content/uploads/2021/06/angelB-be-back.jpg" className="card-img-top block-img" alt="..." height="310px"></img> */}
                        <Link to="/login" style={ this.setStyleChoose() }><i className="fa fa-external-link choose" aria-hidden="true"></i></Link>
                    </div>
                    <div className="card-body">
                        <div className="card-title text-center">
                            <Link
                                to="/"
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