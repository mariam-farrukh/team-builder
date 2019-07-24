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
      }
    return (
        <div className = 'form'>
            <form onSubmit = {handleSubmit}>
                <div>Name:</div>
                <label> 
                    <input 
                        name='name'
                        type='text'
                        placeholder = 'Name'
                        value={member.name}
                        onChange={handleChange}
                    />
                </label> 
                <div>Email:</div>
                <label>
                <input 
                        name='email'
                        type='email'
                        placeholder = 'Email'
                        value={member.email}
                        onChange={handleChange}
                    />
                </label>
                <div>Role</div>
                <label> 
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