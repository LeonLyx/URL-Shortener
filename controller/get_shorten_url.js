var Response = require('../lib/http_response');
var Error = require('../lib/error');
var Validator = require('../lib/url_validator');
var URLModel = require('../model/url');

var getShortenURL = async (req, res) =>{
    let { original_url } = req.body;

    if (!original_url) return Response.MalformedRequestResponse(res);
    if (!Validator.isValidURL(original_url)) return Response.MalformedURLResponse(res);

    try{
        let shortenURL = await URLModel.getShortenURL(original_url);
        return Response.ShortenURLResponse(res, shortenURL);
    } catch(exception){
        if (exception instanceof Error.NoURLAvailableError) 
            return Response.NoURLAvailableResponse(res);
        else if (exception instanceof Error.DatabaseError) 
            return Response.DatabaseErrorResponse(res);
        
        return Response.ServerErrorResponse(res);
    }
};

module.exports = getShortenURL;