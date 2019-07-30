import React from 'react';

function Member({ teamData, setMemberToEdit}) {

    return (
        <div>
            <h2>{teamData.name}</h2>
            <ul>
                <li>{teamData.email}</li>
                <li>{teamData.role}</li>
            </ul>
            <button onClick={() => setMemberToEdit(teamData)}>Edit</button>
        </div>
    );
}

export default Member;