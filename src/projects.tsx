import React from 'react';
import { projects } from './utils/projects';
import './projects.css';

const Projects = () => {
    return (
        <div className="projects-section">
            {projects.map((project) => (
                <a
                    key={project.id}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card"
                >
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.image && <img src={project.image} alt={project.title} />}
                    <ul>
                        {project.bullet_points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </a>
            ))}
        </div>
    );
};

export default Projects;
