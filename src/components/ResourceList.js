import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({resource}) => {
    const [resources, setResources] = useState([]);

    const fetchUpdate = async resource => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    }

    useEffect(() => {
        console.log('useEffect');
        fetchUpdate(resource);
    }, []);

    return (
        <div>
            {resources.map(value => 
                <div key={value.id}>
                    <h2>{value.title}</h2>
                </div>
            )}
        </div>
    );
};

export default ResourceList;