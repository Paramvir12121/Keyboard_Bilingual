import React from 'react';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import Countdown from '../../components/timer/Countdown';
import ConsoleLog from '../../components/timer/tests/ConsoleLog';



const Dashboard = () => {
   
   
    return (
       <>
         <div>
        Welcome to the Dashboard
        {/* Add dashboard components here */}
        <div>
            <Link to="/typing">Typing</Link> <br />
            <Link to="/checkout">Checkout</Link><br />
            <Link to="/test1">KeyPress Test</Link><br />
            <Link to="/lessonlist">Lesson List</Link><br /> 
            <Link to="/typing-viewer">Typing Viewer (Test) </Link><br /> 
        </div>
        </div>
         <Countdown seconds={10} /> 
         <ConsoleLog />
       </>
    );
};

export default Dashboard;