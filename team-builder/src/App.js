import React, { useState } from "react";
import './App.css';
import Form from "./components/Form.js"
// import TeamMembers from './components/TeamMember.js';

function App() {
  const[team, setTeam] = useState({
    name: 'Mariam',
    email: 'blah@blah.com',
    role: 'Web Developer'
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi!</h1>
      </header>
      <div>
        <Form team={setTeam}/>
        {/* <TeamMembers members={team}/> */}
      </div>
    </div>
  );
}

export default App;
