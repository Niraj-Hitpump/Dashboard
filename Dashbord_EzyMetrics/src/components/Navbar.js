import React from "react";
import { FaBell, FaUserCircle, FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-left">
				<FaBars className="icon hamburger" />
				<input type="text" placeholder="Search here..." className="search-bar" />
			</div>
			<div className="navbar-right">
				<FaBell className="icon" />
				<FaUserCircle className="icon" />
			</div>
		</div>
	);
};

export default Navbar;
