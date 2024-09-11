// Models for the Friend Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if (err) {
        res.status(500).json({ Error: 'You are not connected to the server.' });
    } else {
        console.log('Success: You are connected to the server!');
    }
});

// SCHEMA: Define the collection's schema.
const friendSchema = mongoose.Schema({
    friendName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    favoriteColor: { type: String, required: true },
    birthday: { type: Date, required: true }
});

// Compile the model from the schema 
// by defining the collection name "friends".
const friends = mongoose.model('Friends', friendSchema);


// CREATE model *****************************************
const createFriend = async (friendName, phoneNumber, favoriteColor, birthday) => {
    const friend = new friends({
        friendName: friendName,
        phoneNumber: phoneNumber,
        favoriteColor: favoriteColor,
        birthday: birthday
    });
    return friend.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveFriends = async () => {
    const query = friends.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveFriendByID = async (_id) => {
    const query = friends.findById({ _id: _id });
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteFriendById = async (_id) => {
    const result = await friends.deleteOne({ _id: _id });
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateFriend = async (_id, friendName, phoneNumber, favoriteColor, birthday) => {
    const result = await friends.replaceOne({ _id: _id }, {
        friendName: friendName,
        phoneNumber: phoneNumber,
        favoriteColor: favoriteColor,
        birthday: birthday
    });
    return {
        _id: _id,
        friendName: friendName,
        phoneNumber: phoneNumber,
        favoriteColor: favoriteColor,
        birthday: birthday
    }
}

// EXPORT the variables for use in the controller file.
export { createFriend, retrieveFriends, retrieveFriendByID, updateFriend, deleteFriendById }