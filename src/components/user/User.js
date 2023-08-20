import React from 'react';

function User({name, img}) {
    return (
        <div className="cart user-cart" style={{backgroundImage: `url(${img})`}}>
            <h2>{name}</h2>
        </div>
    );
}

export default User;