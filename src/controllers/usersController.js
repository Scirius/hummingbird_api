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
        const { id } = req.params;
        const sanitized_id=parseInt(id);
        if (isNaN(sanitized_id)){
        res.status(400).send("Bad Request - malformed user id.");
        }else{
            dbConnection
                .query(`SELECT * FROM users WHERE id=`+sanitized_id)
                .then((data) => res.json(data.rows))
                .catch((e) => console.log(e));
        } 
    },
    getMessagesByUserId: (req, res, next) => {
        res.send("not implemented yet");
    }
};

module.exports = UsersController;