var request = (req, res) =>{
    var pool = require('../db/db_connector');
    console.log(pool);
    
    pool.getConnection((err, connection) =>{
        connection.query('INSERT INTO url_tab (shorten_url) VALUES ?', 
            "aaa",
            (error, results, fields) =>{
                console.log(error);
            });
            res.send("Hello World");
    });
};

module.exports = request;