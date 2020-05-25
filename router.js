const httpStatus = require("http-status-codes"),
      contentTypes = require("./contentTypes"),
      utils = require("./utils");

      //create a routes object to hold  the routes functions
const routes = {
    "GET": {},
    "POST": {}
}

//create the handle function to handle requests
exports.handle = (req, res) => {
    try{
        routes[req.method][req.url](req, res);
    }catch (e) {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/error.html", res);
    }
};
exports.get = (url, action) => {
    routes["GET"][url] = action;
};
exports.post = (url, action) => {
    routes["POST"][url] = action;
};