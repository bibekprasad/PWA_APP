import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import	TodoList from "./TodoList";
import * as serviceWorker from './serviceWorker';

var destination=document.querySelector("#root");

ReactDOM.render(
	<div>
		<TodoList/>
	</div>,
	destination	
	);



// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
