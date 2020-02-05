import React from 'react';
import { Link } from 'react-router-dom';



const Header = ({ currentUser, logout, openModal }) => {

    const navBar = (currentUser) => {
        return currentUser ? (<LoggedIn />) : (<LoggedOut />);
    }

    const unsignedUserHeader = () =>(
        <header>          
            <div className="wrap">                 
                <div className="logo-white">
                </div>
                <div className="nav_bar">
                    <ul>
                        <li>
                            <Link to="#">Help</Link>
                        </li>
                        <li>
                            <Link onClick={() => openModal('signup')}>Sign up</Link>
                        </li>
                        <li>
                            <Link onClick={() => openModal('login')}>Log in</Link>
                        </li>
                    </ul> 
                </div>
            </div>
        </header>          
    );

    const signedUserHeader = () =>(
        <header className="signed">
            <div className="wrap signed">
                <div className="logo-red">
                </div>
                <div className="search">
                    <form>
                        <input type="text" placeholder="Search here"></input>
                    </form>
                </div>
                <div className="nav_bar">
                    <ul>
                        <li><Link to="#">Add listing</Link></li>
                        <li><Link to="#">Host</Link></li>
                        <li><Link to="/signup">Saved</Link></li>
                        <li><Link to="/login">Trips</Link></li>
                        <li><Link to="/login">Messages</Link></li>
                        <li><Link to="/login">Help</Link></li>
                        <li><Link to="/login">Picture menu</Link></li>
                        <li><Link onClick={logout}>Log Out</Link></li>
                    </ul>                     
                </div>
            </div>
        </header>                
    );  

  return currentUser ? (signedUserHeader()) : (unsignedUserHeader());
};


export default Header;



