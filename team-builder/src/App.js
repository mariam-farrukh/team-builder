import React, { useState } from "react";
import './App.css';
import Form from "./components/Form.js"

function App() {
  const[team, setTeam] = useState([]);
  const teamHandler = (member) => {
    return setTeam([...team, member])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi!</h1>
      </header>
      <div>
        <Form 
          team={team}
          setTeam={setTeam}
          addTeamMember={member => teamHandler(member)}
        />
      </div>
    </div>
  );
}

export default App;
