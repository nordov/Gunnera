import React from 'react';
import { Link } from 'react-router-dom';



const Main = ({ currentUser }) => {

    const unsignedUserMain = () => (
        <main>
            <section>
                <div className="splash">
                    <img src={window.homeSplash} />
                </div>                    
            </section>
            <div className="content">
                <h1>Main content goes here</h1>
            </div>
        </main>
    );

    const signedUserMain = () => (
        <main>
            <div className="content">
                <h1>Main content goes here</h1>
            </div>
        </main>
    );

    return currentUser ? (signedUserMain()) : (unsignedUserMain());
}

export default Main;