// Core imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Amplify SDK
import Amplify, {DataStore, Predicates} from "aws-amplify";
import { ThemeProvider, Theme } from '@aws-amplify/ui-react';
import awsconfig from "./aws-exports";

// Routes
import "./SGEDSFRaffleApp.css";
import RegistrationForm from "./routes/RegistrationForm";
import Landing from "./routes/Landing";


Amplify.configure(awsconfig);
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentView: 0,
			loading: false,
			registrationDataArr: null
		};
	}

	// testView () {
	// 	const {loading} = this.state;
	// 	const onClickButton1 = () => {
	// 		this.setState({loading: true}, () => {
	// 			setTimeout(() => {
	// 				this.setState({loading: false, currentView: 1});
	// 			}, 1000);
	// 		});
	// 	}
	// 	return (
	// 		<BootstrapUI.Button disabled={loading} onClick={() => onClickButton1}>
	// 			TEST QUERY
	// 		</BootstrapUI.Button>
	// 	);
	// };

	// async testButton() {
	// 	this.setState({loading: false}, () => {
	// 		setTimeout(async () => {
	// 			await DataStore.query(Registration)
	// 				.then(data => {
	// 					this.setState({registrationDataArr: data});
	// 				})
	// 				.finally(response => {
	// 					this.setState({loading: true});
	// 				});
	// 		}, 5000);
	// 	});
	// }

	render() {
		console.log("this.state.loading=", this.state.loading);

		const theme = {
			name: "my-theme",
			tokens: {
				colors: {
					font: {
						primary: {value: "#ffffff"}
					}
				}
			}
		}

		return (
			<ThemeProvider theme={theme}>
				<div className="App">
					<Router>
						<Routes>
							<Route exact path="/" element={<RegistrationForm/>} />
							<Route exact path="/landing" element={<Landing/>} />
						</Routes>
					</Router>
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
