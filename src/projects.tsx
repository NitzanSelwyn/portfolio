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
                    <img src={project.image} />
                    <div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <ul>
                            {project.bullet_points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Projects;
