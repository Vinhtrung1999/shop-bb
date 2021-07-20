import React, { Component } from 'react'
import DropdownBtn from './dropdownBtn'
import RightIcon from './rightIcon'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <header className="text-center fixed-top nav-header">
                <div className="left-header">
                    <DropdownBtn></DropdownBtn>
                </div>
                <div className="center-header">
                    <Link to="/"><img src="/images/logo-black.svg" width='150px'></img></Link>
                </div>
                <div className="right-header">
                    <RightIcon></RightIcon>
                </div> 
            </header>
        )
    }
}
export default Navbar