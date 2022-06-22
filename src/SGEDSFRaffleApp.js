import React, { useEffect } from "react";
import logo from './logo.svg';
import './SGEDSFRaffleApp.css';

// Bootstrap UI
import * as BootstrapUI from 'react-bootstrap';

// Amplify GraphQL API
import Amplify, { DataStore, Predicates } from "aws-amplify";
import { Registration } from './models';

// Amplify UI
import * as AmplifyUI from './ui-components';
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);



// async function onQuery() {
//   const posts = await DataStore.query(Registration);
//   console.log(posts);
// }


function App() {

  useEffect(() => {
    const subscription = DataStore.observe(Registration).subscribe((msg) => {
      console.log(msg.model, msg.opType, msg.element);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="App">
      <AmplifyUI.FormRegistrationSimple></AmplifyUI.FormRegistrationSimple>
    </div>
  );
}

export default App;
