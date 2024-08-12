import React from 'react';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import Graphs from './Graphs';
import Goal from '../../components/common/Goal';
import LessonLists from '../lessons/LessonLists';
import StatsBar from '../../components/layout/StatsBar';
import ROUTES from '../../Routes';  // Import the routes

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
                <Link to={ROUTES.TYPING}>Typing</Link> <br />
                <Link to={ROUTES.CHECKOUT}>Checkout</Link><br />
                <Link to={ROUTES.TEST1}>KeyPress Test</Link><br />
                <Link to={ROUTES.LESSON_LIST}>Lesson List</Link><br /> 
                <Link to={ROUTES.SETTINGS}>Settings</Link><br /> 
            </div>
         </div>
       </>
    );
};

export default Dashboard;
