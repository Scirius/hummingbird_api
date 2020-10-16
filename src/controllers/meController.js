const dbConnection = require('../dbConfig');

const MeController = {
    getRandomUser: (req, res, next) => {
        dbConnection
        .query(`SELECT * FROM users ORDER BY random() LIMIT 1;`)
        .then((data) => res.json(data.rows))
        .catch((e) => console.log(e));
    }
};

module.exports = MeController;