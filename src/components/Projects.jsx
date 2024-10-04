import React from 'react';
import Project from './Project';  // 导入单个项目组件
import '../styles/Projects.css';  // 导入 Projects 样式

function Projects() {
    return (
        <section className="projects">
            <h2>Projekte</h2>
            <Project title="Projekt 1" description="Beschreibung des Projekts 1." />
            <Project title="Projekt 2" description="Beschreibung des Projekts 2." />
        </section>
    );
}

export default Projects;
