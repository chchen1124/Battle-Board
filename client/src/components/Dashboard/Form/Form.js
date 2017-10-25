import React from "react";
import { FormBtn } from "./FormButton.js";
import { Input } from "../Input/Input.js";


const Form = props =>

	<form>
		<Input
			value={props.charName}
			onChange={props.handleInputChange}
			name="Character Name"
			className="form-control"
			placeholder="Character Name"
			id="charName"
		/>
		<Input
			value={props.initBonus}
			onChange={props.handleInputChange}
			name="Initiative Bonus"
			className="form-control"
			placeholder="Initiative Bonus"
			id="initBonus"
		/>
		<Input
			value={props.dexterity}
			onChange={props.handleInputChange}
			name="Dexterity"
			className="form-control"
			placeholder="Dexterity"
			id="dexterity"
		/>
		<Input
			value={props.hitPoints}
			onChange={props.handleInputChange}
			name="Hit Points"
			className="form-control"
			placeholder="HitPoints"
			id="hitPoints"
		/>
		<Input
			value={props.conditions}
			onChange={props.handleInputChange}
			name="Conditions"
			className="form-control"
			placeholder="Conditions"
			id="conditions"
		/>
		<FormBtn
			// disabled={!(props.subject)}
			onClick={props.handleFormSubmit}
		>
			Submit
		</FormBtn>
	</form>

export default Form;
