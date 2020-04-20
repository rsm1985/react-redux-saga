import React from 'react';
import {useDispatch} from 'react-redux'
import {actionGetUsers} from "redux/users/actions";

export default function Button() {
    const dispatch = useDispatch();
 return (
     <button onClick={()=>dispatch(actionGetUsers())}>Press to see users</button>
 )
}
