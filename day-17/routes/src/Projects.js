import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText, Col } from 'reactstrap';

const Projects = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        d3.csv('data/projects.csv', (err, projectsData) => {
            if (projectsData) {
                setData(projectsData);
            }
        });
    }, []);

    return (
        <div className="container">
            <h1>Projects</h1>
            { /* Render a card for each element in your data */ }
        </div>
    );
}

export default Projects;