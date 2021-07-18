import React from 'react';
import {default as ReactModal} from 'react-modal';
import styles from '../stylesheets/Modal.module.css';
import Button from "./Button";

function Modal(props) {
	return (
		<div className={`${styles.container}`}>
			<ReactModal
				isOpen={props.data.isOpen}
				onRequestClose={props.onClose}
				contentLabel="Example Modal"
				ariaHideApp={false}
				className={`${styles.modal}`}
				overlayClassName={styles.backdrop}
			>
				<h2 className={"text-center"}>{props.data.title}</h2>
				<h3 className={"text-center"}>{props.data.subtitle}</h3>
				<p className={"text-center"}>{props.data.content}</p>
				<Button handleClick={props.onClose}>Close</Button>
			</ReactModal>
		</div>
	);
}

export default Modal;