import React,{useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import { userAction } from '../store';


const User = () => {

    const [data,getData] =useState()

    const dispatch=useDispatch();
    
    
    
    const fetchData=async () =>{
        const response = await fetch('https://randomuser.me/api/');
        const userData=await response.json();
        getData(userData.results[0]);
        dispatch(userAction.getUser(data))
        
    }

    useEffect(() => {
        fetchData();
        
    },[]);
  

    //console.log(data)
    //console.log(person)

    return (
        <div>
            <button onClick={fetchData}>Fetch</button>
        </div>
    )
}

export default User
