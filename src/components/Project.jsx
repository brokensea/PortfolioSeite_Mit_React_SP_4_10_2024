<<<<<<< HEAD
import React from 'react';
import '../styles/Project.css';
=======

>>>>>>> 460db07 (Router and Tailwind css basic)

function Project({ title, description }) {
    return (
        <div className="project">
            <h3 className="text-xl font-medium">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Project;