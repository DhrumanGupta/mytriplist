import React from 'react';
import styles from '../stylesheets/Home.module.css';
import {Link} from "react-router-dom";

function NotFound(props) {
	return (
		<div className={styles.main}>
			<h1 className={"header text-center"}>
				404
			</h1>
			<p className={"text-content text-center"}>
				The page you requested does not exist
				<br/>
				<Link to={'/'}>
					Home
				</Link>
			</p>
		</div>
	);
}

export default NotFound;