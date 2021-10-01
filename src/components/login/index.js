import React from "react";

export const Login = ({setUsername, setPassword, loginHandler}) => {
    return(
        <form onSubmit={loginHandler}>
            <input placeholder="Username" onChange = {(e) => setUsername(e.target.value)}/>
            <input placeholder="Password" onChange = {(e) => setPassword(e.target.value)}/>
        </form>
    )
};