var response = require('../lib/http_response');
var validator = require('../lib/url_validator');
var urlModel = require('../model/url');

var shortenURL = async (req, res) =>{
    let { original_url } = req.body;
    
    if (!validator.isValidURL(original_url)) return response.PageNotFound(res);
    let url = await urlModel.getShortenURL(original_url);

    return res.json({
        "shorten_url" : url.original_url,
    });
};

module.exports = shortenURL;