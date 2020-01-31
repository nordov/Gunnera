import React from "react";
import { Link } from "react-router-dom";

const RootNavBar = ({ currentUser }) => {
    const LoggedIn = () => (
        <ul>
            <li><h2>Greetings!</h2></li>
            <li><button Onclick={logout}>Log Out</button></li>
        </ul>
    )

    const LoggedOut = () => (
        <ul>
            <li><Link to="#">List your place</Link></li>
            <li><Link to="#">Help</Link></li>
            <li><Link to="/signup">Sign Up </Link></li>
            <li><Link to="/login">Log In </Link></li>
        </ul>        
    ) 

    return currentUser ? (<LoggedIn />) : (<LoggedOut />);

}

export default RootNavBar;