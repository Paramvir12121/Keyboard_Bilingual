import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import {Context} from "../../App";
import Countdown from '../../components/timer/countdown';


const UserLoggedIn = () => {
    return (
        <div>
        Welcome to the Dashboard
        {/* Add your dashboard components here */}
        <div>
            <Link to="/typing">Typing</Link>
        </div>
    </div>
    )
}

const UserNotLoggedIn = () => {
    return (
        <div>
            You are not logged in
            <div>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

const Dashboard = () => {
    const [signedIn, setSignedIn] = useContext(Context);
   
    return (
       <>
         {signedIn ? <UserLoggedIn /> : <UserNotLoggedIn />} 
         <Countdown seconds={10} /> 
       </>
    );
};

export default Dashboard;