import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    const fetchUpdate = async resource => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    }

    useEffect(() => {
        fetchUpdate(resource);

        // or, this can works
        // (async resource => {
        //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        //     setResources(response.data)
        // })(resource);
    },
        [resource] // if this value changed, useEffect will be called
    );

    return resources;
}

const ResourceList = ({resource}) => {
    const resources = useResources(resource);

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