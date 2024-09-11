import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Friend({ friend, onEdit, onDelete }) {
    return (
        <tr>
            <td>{friend.friendName}</td>
            <td>{friend.phoneNumber}</td>
            <td>{friend.favoriteColor}</td>
            <td>{friend.birthday}</td>

            {/* Update these icons to something that matches your style. */}
            <td><MdDeleteForever onClick={() => onDelete(friend._id)} /></td>
            <td><MdEdit onClick={() => onEdit(friend)} /></td>
        </tr>
    );
}

export default Friend;