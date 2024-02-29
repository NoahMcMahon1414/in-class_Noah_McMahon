import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import your other components here
import Homepage from './Homepage';
import About from './About';
import Projects from './Projects';

const App = () => {
    return (<div>
                    <div className="container">
                    <Link to="/">Home</Link>
                        { ' - ' }
                        <Link to="/projects">Projects</Link>
                        { ' - ' }
                        <Link to="/about">About</Link>
                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </div>
            </div>
        );
}

export default App;
