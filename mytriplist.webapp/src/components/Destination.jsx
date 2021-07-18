import React from 'react';
import Card from "./Card";
import Button from "./Button";

function Destination(props) {
	const days = props.destination.days.map((day, idx) =>
		<React.Fragment key={idx}>
			<props.space/>
			<label className={"text-content"}>Day {idx + 1}</label>
			&nbsp;&nbsp;&nbsp;
			<button className={`danger-btn ${props.styles.removeBtn}`} style={{transform: 'translateY(-12%)'}}
			        onClick={() => {
				        props.handleRemoveDay(props.idx, idx)
			        }}
			>
				<i className="fas fa-minus-circle fa-lg"/>
			</button>

			<br/>
			<br/>
			
			<div className={props.styles.dayContainer}>
				
				{
					day.places.map((place, placeIdx) =>
						<div className={props.styles.inputGroupHorizontal} key={placeIdx}>
							<input type={"text"} className={`${props.styles.inputSm} ${props.styles.input}`}
							       placeholder={"Place to visit"} value={place.name} onChange={(event) => props.handleDayPlaceNameChange(event, props.idx, idx, placeIdx)}/>

							<input type={"time"} className={`${props.styles.inputSm} ${props.styles.input}`}
							       placeholder={"Time"} value={place.time}
							       onChange={(event) => props.handleDayPlaceTimeChange(event, props.idx, idx, placeIdx)}/>

							<button className={`danger-btn ${props.styles.removeBtn}`}
								onClick={() => {props.handleRemoveDayPlace(props.idx, idx, placeIdx)}}
							>
								<i className="fas fa-minus-circle fa-lg"/>
							</button>

						</div>
					)
				}

				<button className={`${props.styles.addBtn}`}
				        onClick={() => {
					        props.handleAddDayPlace(props.idx, idx)
				        }}
				>
					<i className="fas fa-plus-circle fa-lg"/>
				</button>
				
			</div>
		</React.Fragment>
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
			       value={props.destination.residence.cost} min={"0"}
			       onChange={(event) => props.handleResidenceCostChange(event, props.idx)}/>

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