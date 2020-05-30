var CONSTANT = require('../constant');

module.exports.PageNotFoundResponse = (res) =>{
    res.status(404).send("Not Found");
};

module.exports.PageRedirectResponse = (res, location) =>{
    res.redirect(location);
};

module.exports.MalformedRequestResponse = (res) =>{
    res.set('Content-Type', 'application/json');
    res.json(CONSTANT.RESPONSE.MalformedRequestResponse);
};

module.exports.MalformedURLResponse = (res) =>{
    res.set('Content-Type', 'application/json');
    res.json(CONSTANT.RESPONSE.MalformedURLResponse);
};

module.exports.NoMatchingURLResponse = (res) =>{
    res.set('Content-Type', 'application/json');
    res.json(CONSTANT.RESPONSE.NoMatchingURLResponse);
};

module.exports.NoURLAvailableResponse = (res) =>{
    res.set('Content-Type', 'application/json');
    res.json(CONSTANT.RESPONSE.NoURLAvailableResponse);
};

module.exports.DatabaseErrorResponse = (res) =>{
    res.set('Content-Type', 'application/json');
    res.json(CONSTANT.RESPONSE.DatabaseErrorResponse);
};

module.exports.ServerErrorResponse = (res) =>{
    res.set('Content-Type', 'application/json');
    res.json(CONSTANT.RESPONSE.ServerErrorResponse);
};

module.exports.ShortenURLResponse = (res, url) =>{
    res.set('Content-Type', 'application/json');
    let response = CONSTANT.RESPONSE.ShortenURLResponse;
    response.payload = {
        "shorten_url" : url
    }
    res.json(response);
};