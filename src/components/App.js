import React, { Component } from 'react';

class App extends Component {
    state = { resources: 'posts' };

    render() {
        return (
            <div className="ui container">
                <div>
                    <button
                        onClick={() => this.setState({ resources: 'posts' })}
                    >
                        Posts
                    </button>
                    <button
                        onClick={() => this.setState({ resources: 'todos' })}
                    >
                        Todos
                    </button>
                </div>
                <div>
                    { this.state.resources }
                </div>
            </div>
        )
    }
};

export default App;