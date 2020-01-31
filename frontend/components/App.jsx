import React from "react";
import RootNavBarContainer from "./nav_bar/root_nav_bar/root_nav_container";
import LoginFormContainer from "./auth/login_form_container";
import SignupFormContainer from "./auth/signup_form_container";
import {Route} from "react-router-dom";


const App = () => (
    <div>
        <header>

                <div className="logo">
                </div>
                <div className="nav_bar">
                    <RootNavBarContainer />
                </div>

        </header>
        <Route path="/login" component={LoginFormContainer}/>
        <Route path="/signup" component={SignupFormContainer}/>
    </div>
);

export default App;

//wrapper that wraps all other containers