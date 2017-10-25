import React from "react";

export const FormBtn = props =>
	<button {...props} style={{ float: "right" }} className="btn btn-primary" idName="searchButton">
		{props.children}
	</button>;