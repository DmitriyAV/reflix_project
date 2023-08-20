import React from 'react';
import {Link} from "react-router-dom";

const ReflixLogo = () => {

    return (
        <div className={"reflix-logo"}>
            <Link to={"/"}>
                <img width={100} height={100}
                     src={"https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7a/8d/45/7a8d459d-a5a9-a06b-cc2c-5ca35b5d6969/mza_16750903336365287476.png/1200x1200bb.jpg"}
                     alt={"Reflix Icon"}/>
            </Link>

        </div>
    )
}


export default ReflixLogo;