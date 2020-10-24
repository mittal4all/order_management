import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = { color: "#F15B2A" };
    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>
                Home
      </NavLink>
            {" | "}
            <NavLink to="/create" activeStyle={activeStyle}>
                Create Order
      </NavLink>
            {" | "}
            <NavLink to="/checkorder" activeStyle={activeStyle}>
                Check Order
    </NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>
                About
      </NavLink>
        </nav>
    );
};

export default Header;
