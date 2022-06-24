import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import styled, { css } from "styled-components";

import './SGEDSFRaffleApp.css';

// // Bootstrap UI
import * as BootstrapUI from 'react-bootstrap';

// Amplify GraphQL API
import Amplify, { DataStore, Predicates } from "aws-amplify";
import { Registration } from "./models";

// Amplify UI
import * as AmplifyUI from './ui-components';
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);


async function onQuery() {
  const posts = await DataStore.query(Registration);
  console.log(posts);
}

const formOverrides = {
  FormRegistrationSimple: { width: "100%" },
  Content: { textAlign: "start", width: "100vw", maxWidth: "640px", alignSelf: "center" },
  BtnRegister: {
    onClick: async () => {
      await onQuery().finally(async () => {
        alert("HELLO THERE -- ");
      });
      // await onQuery().finally(async () => {
      //   await new Promise(res => setTimeout(res, 3000));
      //   alert("HELLO THERE -- ");
      // });
    }
  }
};


const DarkBackground = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  ${props =>
    props.disappear &&
    css`
      display: block; /* show */
    `}
`;


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: 0,
      registrationDataArr : [],
      querying: false,
    }

    this.onQuery = this.onQuery.bind(this);
    // this.useState.bind(this);

    // this.useEffect.bind(this);
    // this.onQuery.bind(this);
  }

  async onQuery() {
    await DataStore.query(Registration).finally(() => {
      this.setState({

      });
    });
  }

  render() {
    return (
      <div className="App">
        <BootstrapUI.Button disabled={this.state.querying} onClick={async () => {return await onQuery();}}>TEST QUERY</BootstrapUI.Button>
        <AmplifyUI.FormRegistrationSimple overrides={formOverrides}></AmplifyUI.FormRegistrationSimple>
      </div>
    );
  }
}

// var isLoading = false;

// async function onQuery() {
//   const posts = await DataStore.query(Registration);
//   console.log(posts);
// }

// function Loader() {
//   return <div style={{color: 'black', backgroundColor: 'rgba(0,0,0,0.35)'}} >
//     <img src={logo} className="App-logo" alt="logo" />
//   </div>;
// }

// const formOverrides = {
//   FormRegistrationSimple: {width: '100%'},
//   Content: {textAlign: 'start', width: '100vw', maxWidth: '640px', alignSelf: 'center'},
//   BtnRegister: {onClick: async () => {
//     await onQuery().finally(async () => {
//       await new Promise(res => setTimeout(res, 3000));
//       alert("HELLO THERE -- ");
//     });
//   }}
// }

// function App() {

//   useEffect(() => {
//     const subscription = DataStore.observe(Registration).subscribe((msg) => {
//       console.log(msg.model, msg.opType, msg.element);
//     });
//     return () => subscription.unsubscribe();
//   }, []);


//   return (
//     <div className="App">
//       <Loader></Loader>
//       <AmplifyUI.FormRegistrationSimple overrides={formOverrides}></AmplifyUI.FormRegistrationSimple>
//     </div>
//   );
// }

export default App;
