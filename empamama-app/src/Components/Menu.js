import React from 'react';

export default function Menu () {

    return (
        <div>
            <div className="menuBackground">
                <section className="menuHeader">
                    <h2>Menu</h2>
                    <h4>Choose from any of our tapas-style delicacies:</h4>
                </section>
                <section className="menuItems">
                    <div className="menuItem1">
                        <h3>Empanada</h3>
                        <p>A baked pastry stuffed with meat - 4</p>
                    </div>
                    <div className="menuItem2">
                        <h3>Lumpia</h3>
                        <p>A Filipino spring roll - 3</p>
                    </div>
                    <div className="menuItem3">
                        <h3>Longganisa</h3>
                        <p>A Filipino sweet sausage - 3</p>
                    </div>
                </section>
            </div>
            
            
        </div>
    )
}