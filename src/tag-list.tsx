import React from 'react';
import styled from 'styled-components';

interface TagListProps {
    tags: string[];
}

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px 0;
`;

const Tag = styled.span`
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 16px;
    font-size: 14px;
    color: #333;
    background-color: white;
`;

const TagList: React.FC<TagListProps> = ({ tags }) => {
    return (
        <TagsContainer>
            {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
            ))}
        </TagsContainer>
    );
};

export default TagList;
