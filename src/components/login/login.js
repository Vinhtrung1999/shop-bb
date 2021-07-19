import React , { Component } from 'react'
import LoginForm from './loginForm'
import SignInForm from './signInForm'
class Login extends Component{
    render(){
        return(
            <div>
                <div className="row g-0 form-area">
                    <div className="col-lg-6 col-sm-12 form-area-left">
                        <LoginForm></LoginForm>
                    </div>
                    <div className="col-lg-6 col-sm-12 form-area-right">
                        <SignInForm></SignInForm>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login