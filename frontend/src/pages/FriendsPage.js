import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import FriendList from '../components/FriendList';
import { Link } from 'react-router-dom';

function FriendsPage({ setFriend }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [friends, setFriends] = useState([]);

    // RETRIEVE the entire list of friends
    const loadFriends = async () => {
        const response = await fetch('/friends');
        const friends = await response.json();
        setFriends(friends);
    }


    // UPDATE a single friend
    const onEditFriend = async friend => {
        setFriend(friend);
        redirect("/update");
    }


    // DELETE a single friend  
    const onDeleteFriend = async _id => {
        const response = await fetch(`/friends/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/friends');
            const friends = await getResponse.json();
            setFriends(friends);
        } else {
            console.error(`helpful deletion message = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the friends
    useEffect(() => {
        loadFriends();
    }, []);

    // DISPLAY the friends
    return (
        <>
            <h2>My Friends</h2>
            <p>Some important information about some of my friends.</p>
            <Link to="/create">Add a Friend</Link>
            <FriendList
                friends={friends}
                onEdit={onEditFriend}
                onDelete={onDeleteFriend}
            />
        </>
    );
}

export default FriendsPage;