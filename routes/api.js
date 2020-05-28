var express = require('express');
var router = express.Router();

/**
 * register endpoint
 */
let endpointList = [
	{
		path : "/shorten",
		method : "GET",
		handler : require("../controller/shorten_url"),
	},
	{
		path : "/url",
		method : "GET",
		handler : require("../controller/convert_url"),
	},
];

/**
 * configure router
 */
let endpointRouter = {
	router : router,
	prefix : "/api",
	routes : endpointList 
};

module.exports = endpointRouter;