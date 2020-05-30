/**
 * Raise when there are no shorten urls to supply
 */
module.exports.NoURLAvailableError = 
class NoURLAvailableError extends Error{
    constructor(...params){
        super(...params);
        this.name = "NoURLAvailableError";
    }
}

/**
 * Raise when the shorten url is unallocated
 * Unallocated can imply two cases
 * 1. Url is expired (i.e. after 1 day)
 * 2. Url is not taken at all (i.e. NULL for original_url)
 */
module.exports.NoMatchingURLError =
class NoMatchingURLError extends Error{
    constructor(...params){
        super(...params);
        this.name = "NoMatchingURLError";
    }
}

/**
 * Raise whenever there is an error with the Database
 */
module.exports.DatabaseError = 
class DatabaseError extends Error{
    constructor(...params){
        super(...params);
        this.name = "DatabaseError";
    }
}

/**
 * Raise whenever an exception is not covered and unexpected
 */
module.exports.ServerError = 
class ServerError extends Error{
    constructor(...params){
        super(...params);
        this.name = "ServerError";
    }
}