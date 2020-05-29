var response = require('../lib/http_response');
var validator = require('../lib/url_validator');
var urlModel = require('../model/url');

var convertURL = async (req, res) =>{
    let shorten_url = req.params.shorten_url;
    if (!validator.isValidShortenURL(shorten_url)) return response.PageNotFound(res);

    let original_url = await urlModel.getOriginalURL(shorten_url);
    if (original_url.length < 1) return response.PageNotFound(res);
    
    return res.redirect(original_url[0].original_url); 
};

module.exports = convertURL;