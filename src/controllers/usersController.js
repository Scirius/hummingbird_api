const dbConnection = require('../dbConfig');

const UsersController = {
    // Get all trains and their current station
    getAllUsers: (req, res, next) => {
        dbConnection
            .query(`SELECT * FROM users ORDER BY name`)
            .then((data) => res.json(data.rows))
            .catch((e) => console.log(e));
    },
    createUser: (req, res, next) => {
        res.send("not implemented yet");
    },
    getUserById: (req, res, next) => {
        res.send("not implemented yet");
    },
    getMessagesByUserId: (req, res, next) => {
        res.send("not implemented yet");
    }
};

module.exports = UsersController;