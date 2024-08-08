import React from 'react';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import Graphs from './Graphs';
import Goal from '../../components/common/Goal';
import LessonLists from '../lessons/LessonLists';
import StatsBar from '../../components/layout/StatsBar';



const Dashboard = () => {
   
   
    return (
       <>
         <div>
        <StatsBar />
        <Goal />
        
        <h2>Dashboard</h2>
        {/* Add dashboard components here */}
        <Graphs />
        <LessonLists />
        
       
        <div>
            <Link to="/typing">Typing</Link> <br />
            <Link to="/checkout">Checkout</Link><br />
            <Link to="/test1">KeyPress Test</Link><br />
            <Link to="/lessonlist">Lesson List</Link><br /> 
            <Link to="/settings">Settings</Link><br /> 
        </div>
        </div>
       </>
    );
};

export default Dashboard;