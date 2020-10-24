import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <h1>Order Management Portal</h1>
        <p>This is Order Management Portal.You can easily add your food order and also manage that.</p>
        <Link to="/about" className="btn btn-primary btn-lg">
            Learn more
    </Link>
    </div>
);

export default HomePage;
