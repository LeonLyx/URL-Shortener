/**
 *  Abstracts the request method for ExpressJS routers
 */
var methodDict = {
    POST : (router, path, endpoint) =>{
        router.post(path, endpoint);
    },
    GET : (router, path, endpoint) =>{
        router.get(path, endpoint);
    }
}

module.exports = methodDict;