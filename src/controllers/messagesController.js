const dbConnection = require('../dbConfig');

const MessagesController = {
    getAllMessages: (req, res, next) => {
        dbConnection
        .query(`SELECT m.id, m.text, m.date, m.id_user, u.name, u.image_url 
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
        const { id } = req.params;
        const sanitized_id=parseInt(id);
        if (isNaN(sanitized_id)){
        res.status(400).send("Bad Request - malformed user id.");
        }else{
            dbConnection
                .query(`SELECT m.id, m.text, m.date, m.id_user, u.name, u.image_url FROM messages m
                LEFT JOIN users u
                ON m.id_user=u.id
                WHERE m.id=`+sanitized_id)
                .then((data) => res.json(data.rows))
                .catch((e) => console.log(e));
        } 
    }
};

module.exports = MessagesController;