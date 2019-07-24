import React, { useState } from "react";

const Form = ({addTeamMember}) => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: '',
    })
    function handleChange(event) {
        const updatedMember = { ...member, [event.target.name]: event.target.value};
        console.log(
            "handleChange",
            event.target.name,
            event.target.value,
            updatedMember
        );
        setMember(updatedMember);
    };
    function handleSubmit(event) {
        const addMember = addTeamMember;
        addMember(member);
        event.preventDefault();
        console.log("name", addMember);
      }
    return (
        <div className = 'form'>
            <form onSubmit = {handleSubmit}>
                <label> Name
                    <input 
                        name='name'
                        type='text'
                        placeholder = 'Name'
                        value={member.name}
                        onChange={handleChange}
                    />
                </label>
                <label> Email
                <input 
                        name='email'
                        type='email'
                        placeholder = 'Email'
                        value={member.email}
                        onChange={handleChange}
                    />
                </label>
                <label> Role
                <input 
                        name='role'
                        type='text'
                        placeholder = 'Role'
                        value={member.role}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;