import React from 'react';
import ReflixLogo from "./ReflixLogo";
import UserList from "./user/UserList";


const Landing = ({users}) => {
    return (
        <div>
            <ReflixLogo/>
            <h3>Select a Netflix User</h3>
            <UserList users={users}/>
        </div>
    );
}

export default Landing;
