var pool = require("../db/db_connector");

/**
 * Queries
 */
var insertURLQuery = 
"   UPDATE url_tab \
    SET original_url = ?, issue_datetime = NOW() \
    WHERE (original_url IS NULL AND issue_datetime IS NULL) \
    OR TIMESTAMPDIFF(DAY, issue_datetime, NOW()) >= 1 \
    LIMIT 1; \
"
var getValidShortenURLQuery = 
"   SELECT shorten_url, issue_datetime \
    FROM url_tab \
    WHERE original_url = ? AND TIMESTAMPDIFF(DAY, issue_datetime, NOW()) < 1; \
"
var getOriginalURLQuery = 
"   SELECT original_url \
    FROM url_tab \
    where shorten_url = ?; \
"

var insertURL = (url) =>{
    return new Promise(async (resolve, reject) =>{
        pool.query(insertURLQuery, url, (error, results, fields) =>{
            if (error) reject("Failed to make query");
            resolve(results.changedRows);
        });
    });
};
var getValidShortenURL = (url) =>{
    return new Promise((resolve, reject) =>{
        pool.query(getValidShortenURLQuery, url, (error, results, fields) =>{
            if (error) reject("Failed to make query");
            resolve(results);
        });
    });
};

module.exports.getShortenURL = (url) =>{
    return new Promise(async (resolve, reject) =>{
        let shorten_url = await getValidShortenURL(url);
        if (shorten_url.length > 0) resolve(shorten_url[0])
        
        let changedRows = await insertURL(url);
        if (changedRows < 1) reject("No slots available");
        
        shorten_url = await getValidShortenURL(url);
        resolve(shorten_url[0]);
    });
};

module.exports.getOriginalURL = (url) =>{
    return new Promise((resolve, reject) =>{
        pool.query(getOriginalURLQuery, url, (error, results, fields) =>{
            if (error) reject("Failed to make query");
            resolve(results);
        });
    });
};

