import React from 'react';
import { Link } from 'react-router-dom';
import ListingGrid from '../listings/listing_grid_container'



const Main = ({ currentUser }) => {

    const homeSplash = () => {
        if (currentUser == null)
            return(
                <section>
                    <div className="splash">
                        <img src={window.homeSplash} />
                    </div>                    
                </section>
            )
    };
    
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

    return (
        <main>
            { homeSplash() }
            <div className="content">
                <ListingGrid />
            </div>
        </main>        
    );
}

export default Main;