// eslint-disable-next-line
import React, { useState } from "react";
import Header from "../Header/HeaderComponent";

const HomePage = () => {
    return (
    <div>
    <Header />
    <div className="home-container">
        <h1> Welcome to home page!!</h1>
        <p> This is where the users land after signing up successfully.</p>
    </div>
    </div>
);
};

export default HomePage;