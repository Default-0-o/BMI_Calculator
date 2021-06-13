import React, { Component } from "react";
import classes from "./Calculator.module.css";
import Input from "../../components/UI/Input/Input";
import Calc from "../../components/calculator/calculator";

class Calculator extends Component {
	state = {
		parameter: {
			weight: {
				id: "weight",
				value: null,
				measurementUnits: ["kg", "lbs"],
				chosenUnit: "kg",
			},
			height: {
				id: "height",
				value: null,
				measurementUnits: ["cm", "feet"],
				chosenUnit: "cm",
				isRange: false,
			},
		},
		showResult: false,
		ref: React.createRef(),
		click: false,
		oldw: null,
		oldh: null,
	};

	inputChangeHandler = (event, id) => {
		let newState;
		let newParam;

		switch (id) {
			case "weight":
				newState = { ...this.state.parameter.weight };
				newParam = { ...this.state.parameter };
				newState.value = event.target.value;
				newParam.weight = newState;
				this.setState({ parameter: newParam });
				break;
			case "height":
				newState = { ...this.state.parameter.height };
				newParam = { ...this.state.parameter };
				newState.value = event.target.value;
				newParam.height = newState;
				this.setState({ parameter: newParam });
				break;
			default:
				break;
		}
	};

	unitChangeHandler = (event, id) => {
		let newParam;
		let newState;

		switch (id) {
			case "weight":
				newState = { ...this.state.parameter.weight };
				newParam = { ...this.state.parameter };
				newState.chosenUnit = event.target.value;
				newParam.weight = newState;
				this.setState({ parameter: newParam });
				break;
			case "height":
				newState = { ...this.state.parameter.height };
				newParam = { ...this.state.parameter };
				newState.chosenUnit = event.target.value;
				if (event.target.value === "feet") {
					newState.isRange = true;
				} else {
					newState.isRange = false;
				}
				newParam.height = newState;
				this.setState({ parameter: newParam });
				break;
			default:
				break;
		}
	};

	render() {
		let data = [];
		for (let key in this.state.parameter) {
			data.push({
				...this.state.parameter[key],
			});
		}
		return (
			<div>
				<form
					className={classes.Calculator}
					onSubmit={(event) => event.preventDefault()}>
					{data.map((el) => {
						return (
							<Input
								placeHolder={el.chosenUnit}
								key={el.id}
								inputType={el.id}
								units={el.measurementUnits}
								value={el.value}
								rangeInput={el.isRange}
								chosenUnit={el.chosenUnit}
								result={this.state.showResult}
								unitChanged={(event) => {
									this.unitChangeHandler(event, el.id);
								}}
								changed={(event) => {
									this.inputChangeHandler(event, el.id);
									this.setState({ click: false });
								}}
							/>
						);
					})}
					<button
						className={classes.Button}
						onClick={
							this.state.parameter.weight.value &&
							this.state.parameter.height.value
								? () => {
										this.setState({
											showResult: true,
											click: true,
											oldw: this.state.parameter.weight.value,
											oldh: this.state.parameter.height.value,
										});
								  }
								: null
						}>
						<span>submit</span>
					</button>
				</form>
				{this.state.showResult ? (
					<Calc
						weight={
							this.state.click
								? this.state.parameter.weight.value
								: this.state.oldw
						}
						height={
							this.state.click
								? this.state.parameter.height.value
								: this.state.oldh
						}
						units={[
							this.state.parameter.weight.chosenUnit,
							this.state.parameter.height.chosenUnit,
						]}
					/>
				) : null}
			</div>
		);
	}
}

export default Calculator;
