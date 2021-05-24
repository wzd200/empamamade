import React from 'react';
import { useHistory } from "react-router-dom";

export default function Home () {
    const history = useHistory();

    const routeToMenu = () => {
        history.push("/Menu")
    }
    return (
        <div>
            <section className="heroBanner">
                <div className="heroImage">
                    <div className="heroMainText">
                        <h1>Welcome to Empamama's</h1>
                    </div>
                    <div className="heroSubText">
                        <h2>~ Authentic Filipino Cuisine ~</h2>
                    </div>
                    <div className="multi-container">
                        <div className='multi-button'>
                            <button onClick={routeToMenu}>Menu</button>
                        </div>
                    </div>
                    <div>
                        <h2 className="announcementText">Coming soon!</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}