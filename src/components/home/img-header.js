import React , { Component } from 'react'
class ImageHeader extends Component{
    render(){
        return(
            <div style={
                {
                    backgroundImage: `url('/images/20210403.jpg')`,
                    backgroundRepeat: ' no-repeat',
                    height: '100vh',
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                
                }
            }>

            </div>
        )
    }
}
export default ImageHeader