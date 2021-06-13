import React from "react";
import classes from "./calculator.module.css";
import obesePic from "../../assets/images/obese.png";
import overweightPic from "../../assets/images/overweight.png";
import normalPic from "../../assets/images/normal.png";
import underweightPic from "../../assets/images/underweight.png";
import { Container } from "reactstrap";

const calculator = (props) => {
	let finalWeight;
	let finalHeight;

	switch (JSON.stringify(props.units)) {
		case JSON.stringify(["kg", "feet"]):
			finalWeight = props.weight;
			finalHeight = (props.height * 2.54 + 121.92) / 100;
			break;
		case JSON.stringify(["lbs", "cm"]):
			finalWeight = props.weight / 2.20462;
			finalHeight = props.height / 100;
			break;
		case JSON.stringify(["lbs", "feet"]):
			finalWeight = props.weight / 2.20462;
			finalHeight = (props.height * 2.54 + 121.92) / 100;
			break;
		default:
			finalWeight = props.weight;
			finalHeight = props.height / 100;
	}

	let bmi = finalWeight / (finalHeight * finalHeight);
	bmi = (Math.round(bmi * 10) / 10).toFixed(1);
	console.log(bmi);
	let status = null;
	let imgDescription = null;
	let img = null;
	let maxWidth = null;

	switch (true) {
		case bmi < 18.5:
			status = "Underweight";
			img = underweightPic;
			imgDescription =
				"Seems like you need to increase your carbs and protein intake!";
			maxWidth = 250;
			break;
		case 18.5 <= bmi && bmi <= 24.9:
			status = "Normal";
			img = normalPic;
			imgDescription = "Perfection! keep up the good work.";
			maxWidth = 290;
			break;
		case 25 <= bmi && bmi <= 29.9:
			status = "Overweight";
			img = overweightPic;
			imgDescription = "Take a step away from carbs and you'll do better.";
			maxWidth = 350;
			break;
		default:
			status = "Obese";
			img = obesePic;
			imgDescription =
				'Well, seems like you have got a new hobby named "Hitting the gym and enjoying veggies"!';
			maxWidth = 350;
	}

	return (
		<Container>
			<div className={classes.Calc}>
				<div>
					<h4>Your BMI is</h4>
					<h1>{bmi}</h1>
				</div>
				<div>
					<img
						style={{ maxWidth: maxWidth }}
						className={classes.image}
						src={img}
						alt={status + " illustration"}
					/>
					<h4 className={classes.parag}>{status}</h4>
					<h6 className={classes.parag + " pb-4"}>{imgDescription}</h6>
				</div>
			</div>
		</Container>
	);
};

export default calculator;
