import React from 'react';
import styled from 'styled-components';

interface ProjectCardProps {
    title: string;
    description: string;
    link?: string;
}

interface Project {
    title: string;
    description: string;
    link?: string;
}

const ProjectCardContainer = styled.div<{ hasLink: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: black;
    transition: transform 0.3s ease;
    background-color: white;

    ${({ hasLink }) =>
        hasLink &&
        `
        &:hover {
            transform: translateY(-5px);
        }
    `}
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    display: flex;
    align-items: center;
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: bold;
`;

const LinkIcon = styled.span`
    margin-left: 8px;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
`;

const Description = styled.p`
    margin: 0;
    font-size: 14px;
    color: #555;
`;

const ProjectLink = styled.a`
    text-decoration: none;
    color: inherit;
    display: block;
`;

const Card: React.FC<ProjectCardProps> = ({ title, description, link }) => {
    const Content = (
        <CardContent>
            <Title>
                {title}
                {link && <LinkIcon>🔗</LinkIcon>}
            </Title>
            <Description>{description}</Description>
        </CardContent>
    );

    return link ? (
        <ProjectLink href={link}>
            <ProjectCardContainer hasLink={!!link}>{Content}</ProjectCardContainer>
        </ProjectLink>
    ) : (
        <ProjectCardContainer hasLink={!!link}>{Content}</ProjectCardContainer>
    );
};

interface ProjectListProps {
    projects: Project[];
}

const ProjectsSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    margin: 0 auto
`;

const CardList: React.FC<ProjectListProps> = ({ projects }) => (
    <ProjectsSection>
        {projects.map((project, index) => (
            <Card
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
            />
        ))}
    </ProjectsSection>
);

export default CardList;
