import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Welcome.module.css";

class Welcome extends Component {
	render() {
		return (
			<div style={{ marginTop: "10%" }}>
				<h2>Welcome to BMI Calculator program</h2>
				<NavLink className={classes.Link} to="/calculator">
					Let's get started
				</NavLink>
			</div>
		);
	}
}

export default Welcome;
