import React, {useEffect, useState} from "react";
import "../SGEDSFRaffleApp.css";


class RegistrationForm extends React.Component {

    /*******************************
     * Constructor
     */
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
		};
	}

	render() {
		console.log("this.state.loading=", this.state.loading);
		return (
			<div>
				HERE
			</div>
		);
	}
}

export default RegistrationForm;