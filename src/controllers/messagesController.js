const dbConnection = require('../dbConfig');

const MessagesController = {
    getAllMessages: (req, res, next) => {
        dbConnection
            .query(`SELECT * FROM messages ORDER BY date DESC`)
            .then((data) => res.json(data.rows))
            .catch((e) => console.log(e));
    },
    getAllMessagesInclUser: (req, res, next) => {
        dbConnection
            .query(`SELECT m.id, m.text, m.date, m.id_user, u.name as user_name, u.image_url 
            FROM messages m
            LEFT JOIN users u
            ON m.id_user=u.id
            ORDER BY m.date DESC`)
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