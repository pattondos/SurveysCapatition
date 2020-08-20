import React from 'react';

const Dashboard = () => {

    return (
        <div className="container">
            <h1 style={{ textAlign: "center" }}>
                    Dashboard
            </h1>
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large btn red">
                    <i className="material-icons">add</i>
                </a>
            </div>
        </div>
    );
};

export default Dashboard;