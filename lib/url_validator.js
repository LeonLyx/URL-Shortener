var validator = require('validator');

var isValidURL = (url) =>{
    validator.default.isURL(url);
};

var isValidShortenURL = (url) =>{
    return (url.length == 3 && validator.default.matches(url, /^[0-9a-zA-z]{3}$/i))
};

