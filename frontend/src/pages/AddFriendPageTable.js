import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddFriendPageTable = () => {

    const [friendName, setfriendName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');
    const [birthday, setBirthday] = useState('');

    const redirect = useNavigate();

    const addFriend = async () => {
        const newFriend = { friendName, phoneNumber, favoriteColor, birthday };
        const response = await fetch('/friends', {
            method: 'post',
            body: JSON.stringify(newFriend),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert(`helpful adding message`);
        } else {
            alert(`helpful adding message = ${response.status}`);
        }
        redirect("/");
    };


    return (
        <>
            <article>
                <h2>Add a friend</h2>
                <p>Keep track of all your friends and some basic information about them on this page. </p>

                <table id="friends">
                    <caption>Which friend would you like to add?</caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Favorite Color</th>
                            <th>Birthday</th>
                            <th>  </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label htmlFor="friendName">Name</label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={friendName}
                                    onChange={e => setfriendName(e.target.value)}
                                    id="name" />
                            </td>

                            <td><label htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    type="Number"
                                    value={phoneNumber}
                                    placeholder="Number"
                                    onChange={e => setPhoneNumber(e.target.value)}
                                    id="phoneNumber" />
                            </td>

                            <td><label htmlFor="favoriteColor">Favorite Color</label>
                                <input
                                    type="text"
                                    placeholder="Color"
                                    value={favoriteColor}
                                    onChange={e => setFavoriteColor(e.target.value)}
                                    id="favoriteColor" />
                            </td>

                            <td><label htmlFor="birthday">Birthday</label>
                                <input
                                    type="text"
                                    placeholder="MM-DD-YYYY"
                                    value={birthday}
                                    onChange={e => setBirthday(e.target.value)}
                                    id="birthday" />
                            </td>

                            <td>
                                <label htmlFor="submit">Submit</label>
                                <button
                                    type="submit"
                                    onClick={addFriend}
                                    id="submit"
                                >Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default AddFriendPageTable;