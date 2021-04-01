import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { MdHome } from "react-icons/md";


export default function NavBar() { 
    return (
        <nav id="navbar">
            <NavLink className="nav-item" to="/home"><MdHome className="nav-icon"/></NavLink>
            <SearchBar/>
            {/* <div style={{display:"flex", flexDirectioin:"row-reverse", justifyContent:"end"}}>
                <NavLink className={nic} to="/cart"/>
                <NavLink className={nic} to="/orders"/>
                <NavLink className={nic} to="/settings"/>
            </div> */}
            {/* <button className="nav-button float-right" onClick={() => (<Redirect push to="/logout"/>)}>Log Out</button> */}
        </nav>
    );
}