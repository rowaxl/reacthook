import { useState, useEffect } from 'react';
import axios from 'axios';

const UseResources = (resource) => {
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
};

export default UseResources;