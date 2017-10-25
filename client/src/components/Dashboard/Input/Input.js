import React from "react";

export const Input = props =>
	<div className="form-group">
		<label>
			{props.name}:
			<input className="form-control" {...props} />
		</label>

	</div>;