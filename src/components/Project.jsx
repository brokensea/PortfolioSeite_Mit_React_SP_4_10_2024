import React from 'react';
import '../styles/Project.css';

function Project({ title, description }) {
    return (
        <div className="project">
            <h3 className="text-xl font-medium">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Project;
