import React from 'react';
import {useSelector} from "react-redux";

export default function() {
    const users = useSelector((state) => state.users);
    const {loading} = users;
    return (
        loading ? <div style={{ textAlign: 'center' }}>
            <h1>LOADING...</h1>
        </div> : null
    )
}
