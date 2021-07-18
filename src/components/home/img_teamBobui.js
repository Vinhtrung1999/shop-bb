import React , { Component } from 'react'
class ImgTeamBobui extends Component{
    render(){
        var { linkSrc, messh5, messh6, messp } = this.props
        return(
            <div className="col-lg-6 col-sm-12 pCustom" style={{position:'relative'}}>
                <img src={ linkSrc } width='100%' height='100%' className="filterImgs"></img>
                <div style={
                        {
                            position:'absolute',
                            bottom:'15%',
                            left:'5%',
                            zIndex:'100',
                            color:'#ffffff'
                        }
                    }
                >
                    <h6>{ messh6 }</h6>
                    <h5>{ messh5 }</h5>
                    <p>{messp }</p>
                </div>
            </div>
        )
    }
}
export default ImgTeamBobui