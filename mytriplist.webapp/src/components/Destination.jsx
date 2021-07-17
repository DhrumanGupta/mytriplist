import React, {Fragment} from 'react';
import Card from "./Card";
import Button from "./Button";

//  Destination:
//    Hotel/Residency
//      - Cost ?
//    Days
//      - Places to visit [1]
//      - Notes ?

function Destination(props) {
	const days = props.destination.days.map((day, idx) =>
		<Fragment key={idx}>
			<label className={"text-content"}>Day {idx + 1}</label>
			<div key={idx} className={props.styles.dayContainer}>
				Content here
			</div>
		</Fragment>
	);

	return (
		<Card shadow>
			<button className={`danger-btn ${props.styles.deleteBtn}`}
			        onClick={() => props.handleRemoveDestination(props.idx)}>
				<i className="fas fa-minus-circle fa-lg"/>
			</button>
			<br/>
			<h1 className={"text-content text-center"}>
				Destination {props.idx + 1}
			</h1>

			<label className={"text-content"}>Destination Name</label>
			<input type={"text"} placeholder={"Name"} className={props.styles.input} value={props.destination.name}
			       onChange={(event) => props.handleNameChange(event, props.idx)}/>

			<props.space/>

			<label className={"text-content"}>Place of Residence</label>
			<input type={"text"} placeholder={"Residence Name/Info"} className={props.styles.input}
			       value={props.destination.residence.name}
			       onChange={(event) => props.handleResidenceChange(event, props.idx)}/>
			<label className={"text-content"}>Cost ($)</label>
			<input type={"number"} placeholder={"Cost of Residence"} className={props.styles.input}
			       value={props.destination.residence.cost}
			       onChange={(event) => props.handleResidenceCostChange(event, props.idx)}/>

			<props.space/>

			{days}
			{days.length > 0 && <br/>}


			<Button handleClick={() => props.handleAddDay(props.idx)}>
				<i className={"far fa-plus-square fa-lg"}/> {'\u00A0'} Add Day
			</Button>

			<br/>
		</Card>
	);
}

export default Destination;