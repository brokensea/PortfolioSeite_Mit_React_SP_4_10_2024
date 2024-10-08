<<<<<<< HEAD
import React from 'react';
import Project from './Project';
import '../styles/Projects.css';
=======
import Project from './Project';

>>>>>>> 460db07 (Router and Tailwind css basic)

function Projects() {
    return (
        <section className="projects">
            <h2 className="text-2xl font-semibold">Projekte</h2>
            <Project title="Projekt 1" description="Beschreibung des Projekts 1." />
            <Project title="Projekt 2" description="Beschreibung des Projekts 2." />
        </section>
    );
}

export default Projects;