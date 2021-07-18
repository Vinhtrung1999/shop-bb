import React from "react"
import Container_Home from "./containers/Container_Home"
import NotFound from "./components/share/notFound"
import Login from "./components/login/login"

export const ROUTES = [
    {
        path : '/',
        exact: true,
        component: () => <Container_Home></Container_Home>
    },

    {
        path: '/login',
        exact: true,
        component: () => <Login></Login>
    },

    {
        path: '',
        exact: false,
        component: () => <NotFound></NotFound>
    },

]