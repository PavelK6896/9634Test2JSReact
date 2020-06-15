import React from "react";
import {NavLink} from "react-router-dom";


export const Navbar = () => {


    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <NavLink  to="/data">data</NavLink>
            <NavLink  to="/test">test</NavLink>
        </div>
    )


}
