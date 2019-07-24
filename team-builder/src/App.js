import React, { useState } from "react";
import './App.css';
import Form from "./components/Form.js"
import Member from "./components/Member.js"

function App() {
  const[team, setTeam] = useState([]);
  console.log(team);
  const addTeamMember = (member) => {
    return setTeam([...team, member]);
    
  }
 
  let teamMemberList = team.map(singleTeamMember => 
    <Member key={singleTeamMember.email} teamData={singleTeamMember}/>
  );
      
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
      </header>
      <div>
        <Form 
          addTeamMember={addTeamMember}
        />
      </div>
      <div>
        {teamMemberList}
      </div>
    </div>
  );
}

export default App;
