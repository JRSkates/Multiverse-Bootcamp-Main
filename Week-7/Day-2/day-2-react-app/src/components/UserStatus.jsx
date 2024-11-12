import React from 'react';
// Import useState here
import { useState } from 'react';


function UserStatus(props) {
    // Initialize state here
    const [loggedIn, setLoggedIn] = useState(props.data.isLoggedIn);

    // handleClick callback function here
    const handleClick = () => {
        setLoggedIn((prevLoggedIn) => !prevLoggedIn);
    };

    return (
        <div className = "card">
            <div className ="card-body">
                <h5 className = "card-title">{props.data.username} is {loggedIn ? "currently" : "not"} logged in</h5>
                <button onClick={handleClick}>{loggedIn ? "Logout" : "Login"}</button>
            </div>
        </div>
    )
}

export default UserStatus;