import React from "react";
import classes from "./Input.module.css";
import { Container, Col, Row } from "reactstrap";

const labelHandler = (num) => {
	const feet = num / 12 + 4;
	const inches = num % 12;
	const label =
		inches === 0 ? feet + "'" : Math.trunc(feet) + "'" + inches + '"';
	return label;
};

const input = (props) => {
	let options = [];

	for (let h = 0; h <= 48; h++) {
		options.push(h);
	}

	const position = props.value === null ? 5 : 5 - props.value * 2;

	let inlineCss = {
		position: "relative",
		right: position + "%",
	};

	const firstPos = props.value === null ? "0" : props.value;

	return (
		<Container>
			<Row className={classes.Row}>
				{props.result ? null : (
					<Col lg="auto" sm="12">
						<label className={classes.Label}>
							{props.measurementUnit
								? props.measurementUnit
								: "Please insert your " + props.inputType + " : "}
						</label>
					</Col>
				)}
				<Col lg={{ size: "auto", offset: 1 }} sm="8">
					{props.rangeInput ? (
						<div className={classes.rowCustomize}>
							<input
								className={classes.rangeInput + " form-range border-0"}
								type="range"
								name={props.inputType}
								onChange={props.changed}
								required
								min="0"
								max="48"
								value={firstPos}
								step="1"
								list="heights"
							/>
							<br />
							<span style={inlineCss} className={classes.rangeSpan}>
								<span className={classes.rangeTextSpan}>
									{labelHandler(firstPos)}
								</span>
							</span>
						</div>
					) : (
						<input
							className={classes.Input}
							placeholder={props.placeHolder}
							type="number"
							name={props.inputType}
							onChange={props.changed}
							required
						/>
					)}
				</Col>
				{props.units.map((el) => {
					return (
						<Col lg="auto" sm={{ size: "auto" }} xs="auto">
							<div key={el}>
								<label className={classes.radioLabel}>{el}</label>
								<input
									className={classes.radio}
									type="radio"
									name={props.inputType}
									value={el}
									onChange={props.unitChanged}
									checked={props.chosenUnit === el}
								/>
							</div>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default input;
