import React from 'react';
import './BigCard.css'


const BigCard = () => {
    return (
        <div id="card-container" data-offset="2">
            <div className="pg">
                <img src="http://riccardotartaglia.it/img/deadpool/deadpool.png"/>
            </div>
            <div id="card">
                <div className="shine"></div>
                <div className="text-block">
                    <h1>Deadpool <small>(2016)</small></h1>
                    <h3>Action, Adventure, Sci-Fi</h3>
                    <p>
                        Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name. It is the eighth installment of the X-Men film series, and is directed by Tim Miller.
                    </p>
                    <button>Watch Trailer</button>
                </div>
            </div>
        </div>
    )
}


export default BigCard