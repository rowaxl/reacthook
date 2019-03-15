import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
    state = { resources: [] };

    componentDidMount = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        this.setState({ resources: response.data });
    }

    componentDidUpdate = async prevProps => {
        if (prevProps.resource !== this.props.resource) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({ resources: response.data });
        }
    }

    render() {
        return (
            <div>
                {this.state.resources.map(resource => 
                    <div key={resource.id}>
                        <h2>{resource.title}</h2>
                        <p>{resource.body}</p>
                    </div>
                )}
            </div>
        );
    }
};

export default ResourceList;