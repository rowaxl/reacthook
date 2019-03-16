import React from 'react';
import UseResource from './UseResource';

const UserList = () => {
    const resources = UseResource('users');

    return (
        <ul>
            {
                resources.map(user =>
                    <li key={user.id}>{user.name}</li>
                )
            }
        </ul>
    )
}

export default UserList;