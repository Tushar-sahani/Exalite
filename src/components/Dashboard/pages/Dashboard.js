import React from "react";

const Dashboard = () => {
    return (
        <div class="container text-center">
            <div class="row p-4 heading">
                <h1>Hi Tushar Welcome to Exafluence</h1>
            </div>
            <div class="row row-item">
                <div class="col create-shipment">
                    <h3 className="row-heading">Create a New Shipment</h3>
                    <button className="btn1">CREATE SHIPMENT</button>
                </div>
                <div class="col see-device">
                    <h3 className="row-heading">To see Device Data Stream</h3>
                    <button className="btn1">Device Data Stream</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
