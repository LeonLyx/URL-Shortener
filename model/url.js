var Pool = require("../db/db_connector");
var Error = require("../lib/error");

/**
 * Database Queries
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

/**
 * Finds a shorten URL for a provided URL 
 * Raises DatabaseError and NoURLAvailableError
 * Returns the number of changed rows, if there is any
 */
var insertURL = (url) =>{
    return new Promise(async (resolve, reject) =>{
        Pool.query(insertURLQuery, url, (error, results, fields) =>{
            try{
                if (error){
                    throw new Error.DatabaseError();
                } else if (results.changedRows < 1){
                    throw new Error.NoURLAvailableError();
                }
                resolve(results.changedRows);
            } catch(exception){
                reject(exception);
            }
        });
    });
};

/**
 * Retrieves the shorten URL for a given URL
 * Raises DatabaseError
 * Returns the shorten_url
 */
var getValidShortenURL = (url) =>{
    return new Promise((resolve, reject) =>{
        Pool.query(getValidShortenURLQuery, url, (error, results, fields) =>{
            try{
                if (error){
                    throw new Error.DatabaseError();
                }
                (results[0].shorten_url != null) ? resolve(results[0].shorten_url) : resolve(null);
            } catch(exception){
                reject(exception);
            }
        });
    });
};

/**
 * Attempts to retrieves the shorten URL for a given URL if it exists.
 * Otherwise, it will attempt to create a shorten URL for the given URL
 * Returns the shorten_url
 */
module.exports.getShortenURL = (url) =>{
    return new Promise(async (resolve, reject) =>{
        try{
            let shorten_url = await getValidShortenURL(url);
            if (shorten_url) return resolve(shorten_url);

            await insertURL(url);            
            shorten_url = await getValidShortenURL(url);
            resolve(shorten_url);
        } catch (exception){
            reject(exception);
        }
    });
};

/**
 * Attempts to get the original URL, given the shorten URL
 * Raises DatabaseError, NoMatchingURLError
 * Returns the original URL
 */
module.exports.getOriginalURL = (url) =>{
    return new Promise((resolve, reject) =>{
        Pool.query(getOriginalURLQuery, url, (error, results, fields) =>{
            try{
                if (error){
                    throw new Error.DatabaseError();
                } else if (results[0].original_url == null){
                    throw new Error.NoMatchingURLError();
                }
                resolve(results[0].original_url);
            } catch(exception){
                reject(exception);
            }
        });
    });
};

