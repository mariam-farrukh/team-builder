import React from 'react';

function Member({ teamData}) {

    return (
        <div>
            <h2>{teamData.name}</h2>
            <ul>
                <li>{teamData.email}</li>
                <li>{teamData.role}</li>
            </ul>
        </div>
    );
}

export default Member;