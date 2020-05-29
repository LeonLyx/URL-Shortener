var constant = require('./constant');
var envConfig = process.env.APP_ENV;

var ENV = {}
if (envConfig === constant.ENVIRONMENT.DEVELOPMENT){
    ENV.DB_HOST = process.env.DEV_DB_HOST;
    ENV.DB_USER = process.env.DEV_DB_USER;
    ENV.DB_PASS = process.env.DEV_DB_PASS;
    ENV.DB_NAME = process.env.DEV_DB_NAME;
}
else if (envConfig === constant.ENVIRONMENT.PRODUCTION){
    ENV.DB_HOST = process.env.PROD_DB_HOST;
    ENV.DB_USER = process.env.PROD_DB_USER;
    ENV.DB_PASS = process.env.PROD_DB_PASS;
    ENV.DB_NAME = process.env.PROD_DB_NAME;
}

module.exports = ENV;