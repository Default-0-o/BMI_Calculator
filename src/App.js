import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import classes from "./App.module.css";
import Calculator from "./containers/Calculator/Calculator";
import Welcome from "./containers/Welcome/Welcome";

class App extends Component {
	render() {
		return (
			<div className={classes.App}>
				<Switch>
					<Route path="/calculator" component={Calculator} />
					<Route path="/auth" />
					<Route path="/profile" />
					<Route path="/" exact component={Welcome} />
				</Switch>

				<ul class={classes.circles}>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		);
	}
}

export default App;
