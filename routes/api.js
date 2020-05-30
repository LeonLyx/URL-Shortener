var express = require('express');
var router = express.Router();

/**
 * Register endpoints here
 */
let endpointList = [
	{
		path : "/shorten",
		method : "POST",
		handler : require("../controller/get_shorten_url"),
	},
	{
		path : "/url/:shorten_url",
		method : "GET",
		handler : require("../controller/get_original_url"),
	},
];

/**
 * Register router here
 */
let endpointRouter = {
	router : router,
	prefix : "/api",
	routes : endpointList 
};

module.exports = endpointRouter;