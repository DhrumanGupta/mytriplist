import React, {useState} from 'react';
import createStyles from '../stylesheets/CreateTrip.module.css'
import styles from "../stylesheets/Browse.module.css";
import Button from "../components/Button";
import {Link} from "react-router-dom";

function Browse(props) {
	const [code, setCode] = useState('');
	return (
		<div className={styles.container}>
			<div className={"text-center"}>
				<input className={createStyles.input} placeholder={"List ID"} value={code} onChange={(event) => setCode(event.target.value)}/>
				<Button white>
					<Link to={`view/${code}`}>Search</Link>
				</Button>
			</div>
		</div>
	);
}

export default Browse;