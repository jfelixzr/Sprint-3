import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppMovie from '../components/app/MovieHome';

import Login from '../components/auth/Login'
import Registro from '../components/auth/Registro'

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ Login }
                    />

                    <Route 
                        exact
                        path="/auth/register"
                        component={ Registro }
                    />
 <Route
 exact
            path="/auth/home"
            component={AppMovie}
            
          />
                    <Redirect to="/auth/login" />

                </Switch>
            </div>

        </div>
    )
}