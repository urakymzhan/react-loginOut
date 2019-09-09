import React from 'react';
import '../App.css';    

function UserLoggedIn(props) {

    const userCom = <h1>Welcome back  {props.name}</h1>

    return (<h1>Welcome back {props.name}</h1>)

}
export default UserLoggedIn