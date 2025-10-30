import React from "react";
import "./Home.css";
import Greetings from "./Greetings";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <nav className="nav-bar">
                <Link to="/Greeting" className="nav-button">Greeting</Link>
                <Link to="/Counter" className="nav-button">Counter</Link>
                <Link to="/Moods" className="nav-button">Moods</Link>
                <Link to="/Auth" className="nav-button">Login Form</Link>
                <Link to="/UseReduce" className="nav-button">UseReduce</Link>
                <Link to="/UseContext" className="nav-button">UseContext</Link>
                <Link to="/InfoSlice" className="nav-button"><button>InfoSlicer</button></Link>
                <Link to="/Info"><button>Info Page (Redux)</button></Link>
                <Link to="/Login"><button>Login Page</button></Link>
            </nav>
            <div className="greetings">
                <Greetings name="Shahid" />
            </div>
        </div>
    )
}

export default Home;