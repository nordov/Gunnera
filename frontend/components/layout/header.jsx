import React from 'react';
import { Link } from 'react-router-dom';



const Header = ({ currentUser, logout, openModal }) => {

    const unsignedUserHeader = () =>(
        <header>          
            <div className="wrap">                 
                <div className="logo-white">
                </div>
                <div className="nav_bar">
                    <ul>
                        <li onClick={() => openModal('signup')}>
                            Sign up
                        </li>
                        <li onClick={() => openModal('login')}>
                            Log in
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
                        <li>My Reservations</li>
                        <li>My Listings</li>
                        <li>
                            <div className="dropdown">
                                Profile
                                <div className="dropdown-content" onClick={logout}>
                                    Log Out
                                </div>                            
                            </div>
			            </li>                        
                    </ul>                     
                </div>
            </div>
        </header>                
    );  

  return currentUser ? (signedUserHeader()) : (unsignedUserHeader());
};


export default Header;



