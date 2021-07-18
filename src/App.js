import './App.css';
import Navbar from './components/share/header/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/share/footer';
import { ROUTES } from './routes';

import React , { Component } from 'react'
class App extends Component{

    showRoutes = () => {
        let el = ROUTES.map((val, index) => {
            return <Route key = { index }
                        path = { val.path }
                        exact= { val.exact}
                        component = { val.component }
                    ></Route>
        })

        return el
    }

    render(){
        return(
            <BrowserRouter>
                <Navbar></Navbar>
                <Switch>
                    { this.showRoutes() }
                </Switch>
                <Footer></Footer>
            </BrowserRouter>

        )
    }
}

export default App;
