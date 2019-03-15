import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
    state = { resources: [] };

    componentDidMount = async () => {
        // const response = await axios.get(`${this.props.resource}`);
        const client = axios.create({ baseURL: 'https://jsonplaceholder.com/' });
        const response = await client.get(this.props.resource);
        this.setState({ resource: response.data });
    }

    render() {
        return (
            <div>{this.state.resources}</div>
        );
    }
};

export default ResourceList;