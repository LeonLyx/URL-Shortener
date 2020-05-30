var validator = require('validator');

/**
 * Checks if a provided URL is valid
 */
module.exports.isValidURL = (url) =>{
    return validator.default.isURL(url);
};

/**
 * Checks if a shorten URL meets the required format
 */
module.exports.isValidShortenURL = (url) =>{
    return (url.length == 3 && validator.default.matches(url, /^[0-9a-zA-z]{3}$/i))
};