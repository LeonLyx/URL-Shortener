var Response = require('../lib/http_response');
var Error = require('../lib/error');
var Validator = require('../lib/url_validator');
var URLModel = require('../model/url');

var getOriginalURL = async (req, res) =>{
    let shorten_url = req.params.shorten_url;

    if (!shorten_url) return Response.MalformedRequestResponse(res);
    if (!Validator.isValidShortenURL(shorten_url)) return Response.PageNotFoundResponse(res);

    try{
        let original_url = await URLModel.getOriginalURL(shorten_url);
        return Response.PageRedirectResponse(res, original_url);
    } catch (exception){
        if (exception instanceof Error.NoMatchingURLError) 
            return Response.NoMatchingURLResponse(res);
        else if (exception instanceof Error.DatabaseError) 
            return Response.DatabaseErrorResponse(res);
        
        return Response.ServerErrorResponse(res);
    }
};

module.exports = getOriginalURL;