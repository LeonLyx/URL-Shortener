var validator = require('validator');

var isValidURL = (url) =>{
    return validator.default.isURL(url);
};

var isValidShortenURL = (url) =>{
    return (url.length == 3 && validator.default.matches(url, /^[0-9a-zA-z]{3}$/i))
};

module.exports = {
    isValidURL : isValidURL,
    isValidShortenURL : isValidShortenURL,
}