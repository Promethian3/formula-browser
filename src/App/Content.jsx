import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";


const Content = ({history, location, match}) => {
    /* <Route path="/logout" render={props => <Logout {...props}/>}/> */
    /* <Route strict exact path="" render={ props => (logged_in ? (<Home {...props}/> : (<Login {...props}/>)) }}/> */
    return (
    <main id="content">
        <Switch>
            <Route strict exact sensitive path="/home" render={props => <Home {...props}/>}/>
            <Route path={["", ".", "/"]}><Redirect to="/home"/></Route>
        </Switch>
    </main>);
}

export default Content;