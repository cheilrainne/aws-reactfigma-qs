import React, { useEffect } from "react";
import logo from './logo.svg';
import './SGEDSFRaffleApp.css';

// // Bootstrap UI
// import * as BootstrapUI from 'react-bootstrap';

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

function Loader() {
  return <div style={{color: 'black', backgroundColor: 'rgba(0,0,0,0.35)'}} >
    <img src={logo} className="App-logo" alt="logo" />
  </div>;
}

const formOverrides = {
  FormRegistrationSimple: {width: '100%'},
  Content: {textAlign: 'start', width: '100vw', maxWidth: '640px', alignSelf: 'center'},
  BtnRegister: {onClick: async () => {
    await onQuery().finally(async () => {
      await new Promise(res => setTimeout(res, 3000));
      alert("HELLO THERE -- ");
    });
  }}
}

function App() {

  useEffect(() => {
    const subscription = DataStore.observe(Registration).subscribe((msg) => {
      console.log(msg.model, msg.opType, msg.element);
    });
    return () => subscription.unsubscribe();
  }, []);


  return (
    <div className="App">
      {/* <Loader></Loader> */}
      <AmplifyUI.FormRegistrationSimple overrides={formOverrides}></AmplifyUI.FormRegistrationSimple>
    </div>
  );
}

export default App;
