import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
// import AppHome from '../home/AppHome.jsx';
import '@aws-amplify/ui-react/styles.css';
import '../App.css';

Amplify.configure(outputs);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div id="main-content">
            <h1> Welcome Garrett!</h1>
            <h3> Time to use the metro! </h3>
          </div>
          <div id="main-content-controller">
              <button className="action-button" onClick={signOut}> Connect Metamask </button>
              <button className="action-button"  onClick={signOut}>Sign out</button>
          </div>
        </main>
      )}
    </Authenticator>
  );
};