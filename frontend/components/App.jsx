import React from "react";
import HeaderContainer from "./layout/header_container"
import MainContainer from "./layout/main_container"
import Modal from './ui/modal'
import {Route} from "react-router-dom";

const image = img => (
    <img src={window.brentURL} />
);

class App extends React.Component {

    
    render() {
        return (
            <div className="main-application">
                <HeaderContainer />
                <MainContainer />
                <Modal />
            </div>

            
        );
    };
};

export default App;

//wrapper that wraps all other containers

/* 
<Route path="/login" component={LoginFormContainer}/>
<Route path="/signup" component={SignupFormContainer}/> */