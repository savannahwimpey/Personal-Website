import React from 'react';
import Friend from './Friend';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function FriendList({ friends, onDelete, onEdit }) {
    return (
        <table id="friends">
            <caption>Add and Edit Friends</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Favorite Color</th>
                    <th>Birthday</th>
                    <th>Delete</th>
                    <th>Edit</th>

                </tr>
            </thead>
            <tbody>
                {friends.map((friend, i) =>
                    <Friend
                        friend={friend}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />)}
            </tbody>
        </table>
    );
}

export default FriendList;
