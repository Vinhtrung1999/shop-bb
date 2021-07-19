import React , { Component } from 'react'
import { Link } from 'react-router-dom'
class LoginForm extends Component{
    render(){
        return(
            <div>
                <h2 className="form-login-header">Đăng nhập</h2>
                <form className="form-login">
                    <div className="form-login-content">
                        <div className="form-login-elm">
                            <div className="form-login-tittle">TÊN TÀI KHOẢN HOẶC ĐỊA CHỈ EMAIL</div>
                            <input type="text" name="email" className="form-login-input"></input>
                        </div>
                        <div className="form-login-elm">
                            <div className="form-login-tittle">MẬT KHẨU</div>
                            <input type="text" name="password" className="form-login-input"></input>
                        </div>
                        <button className="btn-submit">đăng nhập</button>
                        <div className="remember-pass">
                            <input type="checkbox"></input> ghi nhớ mật khẩu
                        </div>
                        <div className="forget-pass">
                            <Link className="link-forget-pass" to="/">quên mật khẩu?</Link>
                        </div>
                        
                    </div>
                </form>
            </div>
            
        )
    }
}
export default LoginForm