import React from 'react';
import UseResources from './UseResource';

const ResourceList = ({resource}) => {
    const resources = UseResources(resource);

    return (
        <ul>
            {resources.map(value => 
                <li key={value.id}>
                    <h2>{value.title}</h2>
                </li>
            )}
        </ul>
    );
};

export default ResourceList;