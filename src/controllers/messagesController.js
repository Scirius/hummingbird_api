const dbConnection = require('../dbConfig');

const MessagesController = {
    getAllMessages: (req, res, next) => {
        dbConnection
            .query(`SELECT * FROM messages ORDER BY date DESC`)
            .then((data) => res.json(data.rows))
            .catch((e) => console.log(e));
    },
    createNewMessage: (req, res, next) => {
        res.send("not implemented yet");
    },
    getMessageById: (req, res, next) => {
        res.send("not implemented yet");
    }
};

module.exports = MessagesController;