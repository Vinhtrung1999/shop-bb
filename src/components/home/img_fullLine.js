import React , { Component } from 'react'
class ImgFullLine extends Component{
    render(){
        var { linkSrc } = this.props
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 pCustom">
                <img src={linkSrc} width='100%' height='100%' className="filterImgs"></img>
            </div>
        )
    }
}
export default ImgFullLine