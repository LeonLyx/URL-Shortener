module.exports.ENVIRONMENT = {
    DEVELOPMENT : "DEV",
    PRODUCTION : "PROD"
};

module.exports.RESPONSE = {
    MalformedRequestResponse : {
        "code" : 180,
        "message" : "Request does not meet endpoint's expectation"
    },
    DatabaseErrorResponse :{
        "code" : 181,
        "message" : "Oops! Something went wrong. Please try again."
    },
    ServerErrorResponse :{
        "code" : 182,
        "message" : "Oops! Something went wrong. Please try again."
    },
    MalformedURLResponse :{
        "code" : 190,
        "message" : "Doesn't seem like a valid URL to me... Maybe, try something else?"
    },
    NoMatchingURLResponse : {
        "code" : 191,
        "message" : "Can't seem to find your URL lying around"
    },
    NoURLAvailableResponse :{
        "code" : 192,
        "message" : "Sorry! We are on budget and we are unable to serve you now."
    },
    ShortenURLResponse :{
        "code" : 200,
        "payload" : null
    },
}