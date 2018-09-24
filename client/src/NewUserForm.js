import React from 'react';

const NewUserForm = ({onNewUser = f => f}) => {
    let name, email, height, weight
    const submit = e => {
        e.preventDefault()
        onNewUser(name.value, email.value, height.value, weight.value)
        name.value = ''
        email.value = ''
        height.value = ''
        weight.value = ''
        name.focus()
    }

    return (
        <form onSubmit={submit}>
            <input  ref={input => name = input}
                    type='text'
                    placeholder='Name' required />
            <br />
            <input  ref={input => email = input}
                    type='text'
                    placeholder='Email' required />
            <br />
            <input  ref={input => height = input}
                    type='number'
                    placeholder='Height in inches' required />
            <br />
            <input  ref={input => weight = input}
                    type='number'
                    placeholder='Weight in lbs' required />
            <br />
            <button>Add User</button>
        </form>
    )
}

export default NewUserForm;
