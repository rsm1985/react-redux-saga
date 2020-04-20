import React from 'react';
import {useSelector} from "react-redux";

export default function() {
    const users = useSelector((state) => state.users);
    const {loading} = users;
    console.log("users",users)
    return (
        loading ? <div style={{ textAlign: 'center' }}>
            <h1>LOADING...</h1>
        </div> : null
    )
}

// let Loading = ({ loading }) => (
//     loading ?
//         <div style={{ textAlign: 'center' }}>
//             <img src={img} alt='loading' />
//             <h1>LOADING</h1>
//         </div> :
//         null
// );const mapStateToProps = (state) => ({loading: state.loading})Loading = connect(mapStateToProps,null)(Loading)export default Loading;