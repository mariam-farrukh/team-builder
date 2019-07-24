import React, { useState } from "react";

function Form() {
    const [addMemeber, setAddMember] = useState({
        name: '',
        email: '',
        role: '',
    })
    function changeHandler(event) {
        const updatedMember = { ...addMemeber, [event.target.name]: event.target.value};
        console.log(
            "changeHandler",
            event.target.name,
            event.target.value,
            updatedMember
        );
        setAddMember(updatedMember);
    };
    const submitHandler = event => {
        event.preventDefault();
    };
    return (
        <div className = 'form'>
            <form onSubmit = {submitHandler}>
                <label> Name
                    <input 
                        name='name'
                        type='text'
                        placeholder = 'Name'
                        value={addMemeber.name}
                        onChange={changeHandler}
                    />
                </label>
                <label> Email
                <input 
                        name='email'
                        type='email'
                        placeholder = 'Email'
                        value={addMemeber.email}
                        onChange={changeHandler}
                    />
                </label>
                <label> Role
                <input 
                        name='role'
                        type='text'
                        placeholder = 'Role'
                        value={addMemeber.role}
                        onChange={changeHandler}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;