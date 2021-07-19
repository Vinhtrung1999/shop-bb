import React , { Component } from 'react'
import { Link } from 'react-router-dom'
class MemberHeader extends Component{

    render(){
        return(
            <div className="member-header">
                <div className="member-header-tittle">
                    <div>membership</div>
                    <div>
                        <Link className="member-header-link" to="/">TRANG CHỦ</Link>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default MemberHeader