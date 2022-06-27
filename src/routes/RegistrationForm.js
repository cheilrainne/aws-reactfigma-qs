import React from "react";

// Amplify SDK
import Amplify, {DataStore, Predicates} from "aws-amplify";
import { Hub } from '@aws-amplify/core';
import { Registration } from "../models";
import { SamsungRegistrationForm } from "../ui-components";
import awsconfig from "../aws-exports";

import "../SGEDSFRaffleApp.css";
import headerLogo from "../assets/img/samsung-logo-white.png";

Amplify.configure(awsconfig);
class RegistrationForm extends React.Component {
	/*******************************
     * Constructor
     */
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			registrationDataArr: null
		};

		Hub.listen("datastore", data => {
			console.log("Datastore:: newEvent=", JSON.stringify(data));
			if (data.payload.event === "outboxMutationEnqueued") {
				this.setState({loading: true});
			} else if (data.payload.event === "outboxMutationProcessed") {
				this.setState({loading: false});
			}
		});
	}

	async testButton() {
		this.setState({loading: false}, () => {
			setTimeout(async () => {
				await DataStore.query(Registration)
					.then(data => {
						this.setState({registrationDataArr: data});
					})
					.finally(response => {
						this.setState({loading: true});
					});
			}, 5000);
		});
	}

	render() {
		console.log("this.state.loading=", this.state.loading);

		const formProperties = {
			SamsungRegistrationForm: {width: "100%", backgroundColor: "transparent"},
			Content: {textAlign: "start", width: "100vw", maxWidth: "640px", alignSelf: "center"},
			BtnRegister: {
				disabled: this.state.loading,
				onClick: () => {
					this.setState({loading: true}, () => {
						setTimeout(() => {
							this.setState({loading: false, currentView: 0});
						}, 1000);
					});
				}
			},
		};

		return (
			<div>
				<div className="Header-logo">
					<img src={headerLogo} alt="logo"></img>
				</div>
				<SamsungRegistrationForm overrides={formProperties}></SamsungRegistrationForm>
			</div>
		);
	}
}

export default RegistrationForm;