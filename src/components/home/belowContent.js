import React , { Component } from 'react'
import { Link } from 'react-router-dom'
class BelowContent extends Component{

    render(){
        return(
            <div className="below-content">
                <div className="img-below-content">
                    <Link to="/">
                        <img src="https://bobui.vn/assets/img/person/1.png" className="rounded-circle"></img>
                    </Link>
                </div>
                <div className="content-below-content">
                    <p>{'BOBUI là một thương hiệu quần áo đường phố được thành lập tại Sài Gòn, Việt Nam vào năm 2014 bởi Nguyễn Thanh Dũng. BOBUI được thiết kế tập trung vào thời trang thường ngày và thời trang của các nền văn hóa hip hop, đường phố nói chung.'.toUpperCase()}</p>
                    <Link className="link-below-content" to='/'>{'Nguyễn Thanh Dũng'.toUpperCase()}</Link>
                </div>
            </div>
        )
    }
}
export default BelowContent