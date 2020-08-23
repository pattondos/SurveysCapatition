import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';


const Dashboard = () => {

    return (
        <div className="container">
            <div className="container-fluid">
                <h1 style={{ textAlign: "center" }}>
                    Dashboard
                </h1>
                <div className="container">
                    <SurveyList />
                </div>
                <div className="fixed-action-btn">
                    <Link to="/surveys/new" className="btn-floating btn-large btn red">
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;