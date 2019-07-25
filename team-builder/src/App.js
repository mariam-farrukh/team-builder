import React, { useState } from "react";
import './App.css';
import Form from "./components/Form.js"
import Member from "./components/Member.js"

function App() {
  const[team, setTeam] = useState([]);
  console.log(team);
  const[memberToEdit, setMemberToEdit] = useState('');
  
  const editMember = (editTeamMember) => {
    const editTeam = team.map(member => {
      if (member === memberToEdit) {
        return (editTeamMember);
      } else {
        return member;
      }
    })
    setTeam(editTeam);
  }
  const addTeamMember = (member) => {
    return setTeam([...team, member]);
    
  }
 
  let teamMemberList = team.map(singleTeamMember => 
    <Member key={singleTeamMember} teamData={singleTeamMember} editMember={editMember} memberToEdit={memberToEdit}/>
  );
      
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
      </header>
      <div>
        <Form 
          addTeamMember={addTeamMember}
          setMemberToEdit={setMemberToEdit}
        />
      </div>
      <div>
        {teamMemberList}
      </div>
    </div>
  );
}

export default App;
