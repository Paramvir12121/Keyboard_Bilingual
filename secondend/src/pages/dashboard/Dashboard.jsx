import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import {Context} from "../../App";
import Countdown from '../../components/timer/Countdown';
import ConsoleLog from '../../components/timer/tests/ConsoleLog';


const Dashboard = () => {
    const [signedIn, setSignedIn] = useContext(Context);
   
    return (
       <>
         <div>
        Welcome to the Dashboard
        {/* Add your dashboard components here */}
        <div>
            <Link to="/typing">Typing</Link> <br />
            <Link to="/checkout">Checkout</Link><br />
            <Link to="/keypress">KeyPress Test</Link><br />
            <Link to="/lessonlist">Lesson List</Link><br />
        </div>
        </div>
         <Countdown seconds={10} /> 
         <ConsoleLog />
       </>
    );
};

export default Dashboard;