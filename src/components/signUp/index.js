import React from "react";

export const SignUp = ({setUsername, setPassword, submitHandler}) => {
    return (
        <form onSubmit={submitHandler}>
            <input placeholder="Username" onChange = {(e) => setUsername(e.target.value)}/>
            <input placeholder="Password" onChange = {(e) => setPassword(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
};