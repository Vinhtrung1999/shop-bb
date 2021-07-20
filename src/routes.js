import React from "react"
import Container_Home from "./containers/Container_Home"
import NotFound from "./components/share/notFound"
import Login from "./components/login/login"
import Members from "./components/menbers/members"
import Container_products from "./containers/Container_products"
import Container_Product_Detail from "./containers/Container_Product_Detail"
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
        path: '/member',
        exact: true,
        component: () => <Members></Members>
    },

    {
        path: '/shop',
        exact: true,
        component: () => <Container_products></Container_products>
    },

    {
        path: '/product/:id',
        exact: true,
        component: ({match}) => <Container_Product_Detail match={match}></Container_Product_Detail>
    },

    {
        path: '',
        exact: false,
        component: () => <NotFound></NotFound>
    },

]