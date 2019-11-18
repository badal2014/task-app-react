import React from 'react';
import {Link} from 'react-router-dom';

export const Menu = () => {
    return (
        <div className="menu">
            <h1><Link to="./home"> Home </Link></h1>
            <h1><Link to="./task"> Task </Link></h1>
            <h1><Link to="./deleteProfile"> Delete User </Link></h1>
            <h1><Link to="./profile"> Read Profile </Link></h1>
            <h1>Setting</h1>
        </div>
    )
}; 