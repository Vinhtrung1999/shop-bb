import React , { Component } from 'react'
import { Link } from 'react-router-dom'
class SignInForm extends Component{
    render(){
        return(
            <div>
                <h2 className="form-login-header">Đăng ký</h2>
                <form className="form-login">
                    <div className="form-login-content">
                        <div className="form-login-elm">
                            <div className="form-login-tittle">ĐỊA CHỈ EMAIL</div>
                            <input type="text" name="email" className="form-login-input"></input>
                        </div>
                        <div className="form-login-elm">
                            <div className="form-login-tittle">MẬT KHẨU</div>
                            <input type="text" name="password" className="form-login-input"></input>
                        </div>
                        <button className="btn-submit">đăng KÝ</button>
                        
                        
                    </div>
                </form>
            </div>
        )
    }
}
export default SignInForm