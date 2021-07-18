import React , { Component } from 'react'
class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            animation: false,
            start: true
        }
    }

    setStyle = () => {
        if(this.state.start){
            return {
                display: 'none'
            }
        }
        return {
            animation: this.state.animation ? 'showSearch 2s ease' : 'closeSearch 2s ease forwards'
        }
    }

    onSearch = () => {
        this.setState(
            {
                animation: true,
                start:false
            }
        )
    }

    onClose = () => {
        this.setState({
            animation: false,
            start:false
        })
    }

    render(){
        return(
            <div className="right-icon-search">
                <div className="search-title" onClick={ this.onSearch }>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="search-content" style={ this.setStyle() }>
                    <div className="icon-close" onClick={ this.onClose }>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div className="search-img">
                        <img src="https://bobui.vn/assets/img/logo/logo-black.svg" width="150px"></img>
                    </div>
                    <div className="search-text">TÌM KIẾM</div>
                    <div className="search-input">
                        <input type="text" placeholder="NHẬP TỪ KHÓA"></input>
                        <button><i className="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search