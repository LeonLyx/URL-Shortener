module.exports.PageNotFound = (res) =>{
    res.status(404).send("Not Found");
};

module.exports.PageRedirect = (res, location) =>{
    res.redirect(location);
}