import React from 'react';
import '../styles/Project.css';  // 导入 Project 样式

function Project({ title, description }) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Project;
