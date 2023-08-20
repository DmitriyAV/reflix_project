import React from 'react';
import {Link} from "react-router-dom";
import User from "./User";

function UserList({users}) {
    return (
            <ul className="list-group">
                {users.map( u => (
                    <Link to={"/catalog"}><User key={u.name} name={u.name} img={u.image} /></Link>
                ))}
            </ul>
    );
}

export default UserList;