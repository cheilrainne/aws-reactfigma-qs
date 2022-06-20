import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';

// Amplify GraphQL API
import Amplify, { DataStore, Predicates } from "aws-amplify";
import { Registration } from './models';

// Amplify UI
import { ProductCard } from './ui-components';

import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);


async function onQuery() {
  const posts = await DataStore.query(Registration);
  console.log(posts);
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
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo"/> */}
        <div>
          <ProductCard></ProductCard>
          <input type="button" value="QUERY" onClick={onQuery} />
        </div>
        <p>
          React Amplified
        </p>
      </header>
    </div>
  );
}

export default App;
