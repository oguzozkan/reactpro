import React from "react";
import './App.css';

const Form = props => (
	<form onSubmit={props.getInfo}>
		<div className='butdiv'>
		<button className='createbutton'>Create Creative</button>
		</div>
	</form>
);

export default Form;