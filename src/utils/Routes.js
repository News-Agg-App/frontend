import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute"

import Posts from "../Components/PostComponents/Post"

const Routes = () => {
    return (
        <div>
            <Route exact path="/" render={() => <Redirect to="/posts" />} />
            <Route path="/posts" component={Posts} />
        </div>
    )
}