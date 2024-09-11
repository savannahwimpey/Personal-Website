// Controllers for the Friend Collection

import 'dotenv/config';
import express from 'express';
import * as friends from './friends-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post('/friends', (req, res) => {
    friends.createFriend(
        req.body.friendName,
        req.body.phoneNumber,
        req.body.favoriteColor,
        req.body.birthday
    )
        .then(friend => {
            console.log(`"${friend.friendNamename}" was added to the collection.`);
            res.status(201).json(friend);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Sorry, we were unable to add your friend to the collection.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/friends', (req, res) => {
    friends.retrieveFriends()
        .then(friends => {
            if (friends !== null) {
                console.log(`All friends were retrieved from the collection.`);
                res.json(friends);
            } else {
                res.status(404).json({ Error: 'Friends not found.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'We were unable to retrieve your friends.' });
        });
});


// RETRIEVE by ID controller
app.get('/friends/:_id', (req, res) => {
    friends.retrieveFriendByID(req.params._id)
        .then(friend => {
            if (friend !== null) {
                console.log(`"${friend.friendName}" was retrieved, based on its ID.`);
                res.json(friend);
            } else {
                res.status(404).json({ Error: 'Friend not found.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad request. Check your syntax!' });
        });

});


// UPDATE controller ************************************
app.put('/friends/:_id', (req, res) => {
    friends.updateFriend(
        req.params._id,
        req.body.friendName,
        req.body.phoneNumber,
        req.body.favoriteColor,
        req.body.birthday
    )
        .then(friend => {
            console.log(`"${friend.friendName}" was updated.`);
            res.json(friend);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad request. Check your syntax!' });
        });
});


// DELETE Controller ******************************
app.delete('/friends/:_id', (req, res) => {
    friends.deleteFriendById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} friend was deleted.`);
                res.status(200).send({ Success: 'Your friend was deleted.' });
            } else {
                res.status(404).json({ Error: 'Friend not found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'We were unable to delete that friend.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});