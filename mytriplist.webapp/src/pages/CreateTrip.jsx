import React, {useReducer} from 'react';
import styles from '../stylesheets/CreateTrip.module.css';
import Card from "../components/Card";
import Button from "../components/Button";
import Destination from "../components/Destination";

//  Data:
//    Title
//    Trip Type
//    Destinations
//    Start Date

const reducerActionTypes = {
	tripName: "EDIT_TRIP_NAME",
	startDate: "EDIT_TRIP_START",
	tripType: "EDIT_TRIP_TYPE",
	destination: {
		add: "ADD_DESTINATION",
		remove: "REMOVE_DESTINATION",
		edit: {
			name: "EDIT_DESTINATION_NAME",
			residence: {
				name: "EDIT_DESTINATION_RESIDENCE_NAME",
				cost: "EDIT_DESTINATION_RESIDENCE_COST"
			},
			day: {
				add: "ADD_DESTINATION_DAY"
			}
		}
	}
}

const dataReducer = (prevState, action) => {
	const state = {...prevState};
	switch (action.type) {

		case reducerActionTypes.tripName:
			state.title = action.value
			return state

		case reducerActionTypes.startDate:
			state.startDate = action.value
			return state

		case reducerActionTypes.tripType:
			state.tripType = action.value
			return state

		case reducerActionTypes.destination.add:
			state.destinations = [...state.destinations, {
				name: '',
				residence: {
					name: '',
					cost: 0
				},
				days: []
			}]
			return state

		case reducerActionTypes.destination.remove:
			state.destinations = state.destinations.filter((value, idx) => idx !== action.idx)
			return state

		case reducerActionTypes.destination.edit.name:
			state.destinations[action.idx].name = action.value
			return state

		case reducerActionTypes.destination.edit.residence.name:
			state.destinations[action.idx].residence.name = action.value
			return state

		case reducerActionTypes.destination.edit.residence.cost:
			state.destinations[action.idx].residence.cost = action.value
			return state

		case reducerActionTypes.destination.edit.day.add:
			state.destinations[action.idx].days = action.value
			return state

		default:
			return state
	}
}

function CreateTrip(props) {
	const [dataState, dispatchState] = useReducer(dataReducer,
		{
			title: '',
			tripType: '',
			destinations: [],
			startDate: new Date().toISOString().slice(0, 10),
			isValid: false
		});

	const handleNameChange = (event) => {
		dispatchState({
			type: reducerActionTypes.tripName,
			value: event.target.value
		})
	}

	const handleDateChange = (event) => {
		dispatchState({
			type: reducerActionTypes.startDate,
			value: event.target.value
		})
	}

	const handleTripTypeChange = (event) => {
		dispatchState({
			type: reducerActionTypes.tripType,
			value: event.target.value
		})
	}

	const handleAddDestination = (event) => {
		event.preventDefault()
		dispatchState({
			type: reducerActionTypes.destination.add
		})
	}

	const handleRemoveDestination = (idx) => {
		dispatchState({
			type: reducerActionTypes.destination.remove,
			idx: idx
		})
	}

	const handleDestinationNameChange = (event, idx) => {
		dispatchState({
			type: reducerActionTypes.destination.edit.name,
			value: event.target.value,
			idx: idx
		})
	}

	const handleDestinationResidenceChange = (event, idx) => {
		dispatchState({
			type: reducerActionTypes.destination.edit.residence.name,
			value: event.target.value,
			idx: idx
		})
	}

	const handleDestinationResidenceCostChange = (event, idx) => {
		dispatchState({
			type: reducerActionTypes.destination.edit.residence.cost,
			value: event.target.value,
			idx: idx
		})
	}

	const handleDestinationAddDay = (idx) => {
		dispatchState({
			type: reducerActionTypes.destination.edit.day.add,
			value: [...dataState.destinations[idx].days, {
				places: [],
				note: ''
			}],
			idx: idx
		})
	}

	const Space = () => {
		return (
			<React.Fragment>
				<br/>
				<br/>
			</React.Fragment>
		)
	}

	return (
		<div className={`container ${styles.container}`}>
			<h1 className={"text-heading text-center"}>
				Plan Your Trip
			</h1>

			<Card shadow>
				<h1 className={"text-content text-center"}>
					Basic Details
				</h1>

				<label className={"text-content"}>Trip Name</label>
				<input className={styles.input} placeholder={"Trip Name"} value={dataState.title} onChange={handleNameChange}/>

				<Space/>

				<label className={"text-content"}>Start Date</label>
				<input type={"date"} className={styles.input} value={dataState.startDate} onChange={handleDateChange}/>

				<Space/>

				<label className={"text-content"}>Type of Trip</label>
				<input type={"text"} placeholder={"Vacation / Work Trip / Cultural Visit / ..."} className={styles.input}
				       onChange={handleTripTypeChange}/>
			</Card>

			{
				dataState.destinations.map((destination, idx) =>
					<Destination
						styles={styles}
						handleRemoveDestination={handleRemoveDestination}
						destination={destination}
						idx={idx}
						key={idx}
						space={Space}
						handleNameChange={handleDestinationNameChange}
						handleResidenceChange={handleDestinationResidenceChange}
						handleResidenceCostChange={handleDestinationResidenceCostChange}
						handleAddDay={handleDestinationAddDay}
					/>
				)
			}

			<Button handleClick={handleAddDestination} white>
				<i className={"far fa-plus-square fa-lg"}/> {'\u00A0'} Add Destination
			</Button>

		</div>
	);
}

export default CreateTrip;