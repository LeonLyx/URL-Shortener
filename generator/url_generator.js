var characterSet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" 
];

// Generates all possible permutations
var array = [];
for (let i = 0; i < characterSet.length; i++){
    for (let j = 0; j < characterSet.length; j++){
        for (let k = 0; k < characterSet.length; k++){
            urlPath = characterSet[i] + characterSet[j] + characterSet[k];
            array.push([urlPath]);
        }
    }   
}

// Estabish database connection
var MySql = require('mysql');
var connection = MySql.createConnection({
    host : "<fill in here>",
    user : "<fill in here>",
    password : "<fill in here>",
    database : "<fill in here>",
});

// Bulk insert to populate the database
connection.connect();
connection.query('INSERT INTO url_tab (shorten_url) VALUES ?', [array],
    (error, results, fields) =>{
    	console.log(error);
});
connection.end();

