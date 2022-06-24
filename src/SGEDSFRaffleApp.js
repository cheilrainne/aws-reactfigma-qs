import React, {useEffect, useState} from "react";
// import logo from './logo.svg';
import styled, {css} from "styled-components";

import "./SGEDSFRaffleApp.css";

// // Bootstrap UI
import * as BootstrapUI from "react-bootstrap";

// Amplify GraphQL API
import Amplify, {DataStore, Predicates} from "aws-amplify";
import {Registration} from "./models";

// Amplify UI
import * as AmplifyUI from "./ui-components";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

async function onQuery() {
	const posts = await DataStore.query(Registration);
	console.log(posts);
}

const formOverrides = {
	FormRegistrationSimple: {width: "100%"},
	Content: {textAlign: "start", width: "100vw", maxWidth: "640px", alignSelf: "center"},
	BtnRegister: {
		onClick: async () => {
			await onQuery().finally(async () => {
				alert("HELLO THERE -- ");
			});
		}
	}
};

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: true,
			registrationDataArr: null
		};

		this.testButton = this.testButton.bind(this);
	}

	async testButton() {
		this.setState({loaded: false}, () => {
			setTimeout(async () => {
				await DataStore.query(Registration)
					.then(data => {
						this.setState({registrationDataArr: data});
					})
					.finally(re => {
						this.setState({loaded: true});
					});
			}, 5000);
		});
	}

	render() {
		console.log(this.state.loaded);

		return (
			<div className="App">
				<BootstrapUI.Button disabled={!this.state.loaded} onClick={this.testButton}>
					TEST QUERY
				</BootstrapUI.Button>
				<div>
					<p>
						{this.state.registrationDataArr != null ? JSON.stringify(this.state.registrationDataArr) : ""}
					</p>
				</div>
				<AmplifyUI.FormRegistrationSimple overrides={formOverrides} />
			</div>
		);
	}
}

export default App;
