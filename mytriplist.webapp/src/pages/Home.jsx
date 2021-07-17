import React from 'react';
import styles from '../stylesheets/Home.module.css'
import Typist from "react-typist";

function Home() {
	return (
		<div className={styles.main}>
			<h1 className={"header"}>
				My Trip List
			</h1>
			<h3 className={"subheader text-center"}>
				<Typist
					avgTypingDelay={50}
					stdTypingDelay={20}
					cursor={{
						show: true,
						blink: true,
						element: '|',
						hideWhenDone: true,
						hideWhenDoneDelay: 500,
					}}
				>
					Your one-stop trip planner!
				</Typist>
			</h3>
		</div>
	);
}

export default Home;