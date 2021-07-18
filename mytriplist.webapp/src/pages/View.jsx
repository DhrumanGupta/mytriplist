import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import {apiRoutes} from "../components/Constants/ApiConstants";
import styles from '../stylesheets/View.module.css';
import createStyles from '../stylesheets/CreateTrip.module.css';
import {Redirect} from 'react-router-dom';
import Card from "../components/Card";

function View(props) {
	const [tripData, setTripData] = useState({
		error: false,
		loading: true,
		data: undefined
	})
	const {id} = useParams();

	useEffect(() => {
		setTripData({
			error: false,
			loading: true,
			data: undefined
		})
		axios
			.get(`${apiRoutes.data}/${id}`, {headers: {"Access-Control-Allow-Origin": "*"}})
			.then(res => {
				setTripData({
					error: false,
					loading: false,
					data: res.data
				})
			})
			.catch(err => {
				setTripData({
					error: true,
					loading: false,
					data: undefined
				})
			})
	}, [id]);

	if (tripData.loading) {
		return <h1 className={styles.loading}>
			Loading...
		</h1>
	}

	if (tripData.error) {
		return <Redirect to={'/404'}/>
	}
	
	return (
		<div className={`container ${createStyles.container}`}>
			<Card shadow>
				<h1 className={"text-heading text-center"}>
					{tripData.data.title}
				</h1>
				<p className={"text-mini text-center"}>
					{tripData.data.startDate}
				</p>
				<p className={"text-mini text-center"}>
					{tripData.data.tripType}
				</p>
				
				{
					tripData.data.destinations.map((destination, destinationIdx) => 
						<div key={destinationIdx}>
							<br/>
							<h6 className={"text-content"}>Destination {destinationIdx+1}: {destination.name}</h6>
							<p className={"text-mini"}>
								Staying in/at: {destination.residenceName}
							</p>
							<p className={"text-mini"}>
								Rent: ${destination.residenceCost}
							</p>
							{
								destination.days.map((day, dayIdx) =>
									<div key={dayIdx}>
										<p className={"text-mini"}>
											Day {dayIdx + 1}:
										</p>
										<div className={createStyles.dayContainer}>
											{
												day.places.map((place, placeIdx) =>
													<div key={placeIdx}>
														<p className={"text-mini"}>
															Place {placeIdx+1}: {place.name} ({place.time})
														</p>
													</div>
												)
											}
										</div>
									</div>
								)
							}
						</div>
					)
				}
			</Card>
		</div>
	);
}

export default View;