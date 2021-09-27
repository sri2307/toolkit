import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/user-slice';


const User = () => {

    const [data, getData] = useState();
    const dispatch = useDispatch();
    const fetchData = async () => {
        const response = await fetch('https://randomuser.me/api/');
        const userData = await response.json();
        getData(userData.results[0]);
        dispatch(userActions.getUser(data));
    }

    useEffect(() => {
        fetchData();

    }, []);

    return (
        <div>
            <button onClick={fetchData}>Fetch</button>
        </div>
    )
}

export default User
