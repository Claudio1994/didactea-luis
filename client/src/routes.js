import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import HomeContainer from './Containers/HomeContainer';
import Contact from './Components/main/contact';
import NotFound404 from './Components/main/404';
import ProfileContainer from './Containers/ProfileContainer';
import LoginContainer from './Containers/LoginContainer';

const AppRoutes = () =>{
    return(
        <App>
            <Switch>
                <Route exact path="/" component ={HomeContainer}></Route>
                <Route exact path="/contact" component ={Contact}></Route>
                <Route exact path="/l" component={LoginContainer}></Route>
                <Route exact path="/profile" component={ProfileContainer}></Route>
                <Route component={NotFound404}></Route>
            </Switch>
        </App>
    );
}

export default AppRoutes;
