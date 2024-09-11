import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const EditFriendPageTable = ({ friendToEdit }) => {

    const [friendName, setfriendName] = useState(friendToEdit.friendName);
    const [phoneNumber, setPhoneNumber] = useState(friendToEdit.phoneNumber);
    const [favoriteColor, setFavoriteColor] = useState(friendToEdit.favoriteColor);
    const [birthday, setBirthday] = useState(friendToEdit.birthday);

    const redirect = useNavigate();

    const editFriend = async () => {
        const response = await fetch(`/friends/${friendToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                friendName: friendName,
                phoneNumber: phoneNumber,
                favoriteColor: favoriteColor,
                birthday: birthday
            }),
            headers: { 'Content-Type': 'application/json', },
        });

        if (response.status === 200) {
            alert(`helpful editing message`);
        } else {
            const errMessage = await response.json();
            alert(`helpful editing message ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
            <article>
                <h2>Edit a friend</h2>
                <p>Edit information about your friend.</p>
                <table id="friends">
                    <caption>Which friend are you editing?</caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Favorite Color</th>
                            <th>Birthday</th>
                            <th>Save Changes</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={friendName}
                                    onChange={e => setfriendName(e.target.value)}
                                    id="name" />
                            </td>

                            <td><label htmlFor="phoneNumber"> Phone Number</label>
                                <input
                                    type="number"
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
                                    onClick={editFriend}
                                    id="submit"
                                >Update</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}
export default EditFriendPageTable;