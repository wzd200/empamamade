import React from 'react';
import { useHistory } from "react-router-dom";

export default function Home () {
    const history = useHistory();

    const routeToMenu = () => {
        history.push("/Menu")
    }
    return (
        <div>
            <section class="heroBanner">
                <div class="heroImage">
                    <div class="heroMainText">
                        <h1>Welcome to Empamama's</h1>
                    </div>
                    <div class="heroSubText">
                        <h2>~ Authentic Filipino Cuisine ~</h2>
                    </div>
                    <div class="multi-container">
                        <div class='multi-button'>
                            <button onClick={routeToMenu}>Menu</button>
                        </div>
                    </div>
                    <div>
                        <h2 class="announcementText">Coming soon!</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}