var response = require('../utils/response');

var authorize = {};

/*
 * Based on what type of entity is accessing the resource
 */

authorize.minDeveloper = function(req, res, next){
    if(req.authenticated && req.authenticated.type === "developer"){
        next()
    }else{
        res.status(response.error.accessDenied(req).httpCode).json(response.error.accessDenied(req));
    }
};

authorize.minUserOnSelf = function(req, res, next) {
    if (req.authenticated && req.authenticated.type === "developer") {
        next()
    } else if (req.authenticated && req.authenticated.type === "user"){
        if(req.authenticated.entity.id.toString() === req.params.user){
            next();
        }
    }else{
        res.status(response.error.accessDenied(req).httpCode).json(response.error.accessDenied(req));
    }
};

authorize.minUserOnOwnedUser = function(req, res, next){
    if(req.authenticated && (req.authenticated.type === "developer" || req.authenticated.type === "user")){
        //TODO: Further limit by checking if User accessing is owner in a group where requested User is member
        next()
    }else{
        res.status(response.error.accessDenied(req).httpCode).json(response.error.accessDenied(req));
    }
};

authorize.minAnyUser = function(req, res, next){
    if(req.authenticated && (req.authenticated.type === "developer" || req.authenticated.type === "user")){
        next()
    }else{
        res.status(response.error.accessDenied(req).httpCode).json(response.error.accessDenied(req));
    }
};

authorize.all = function(req, res, next){
    next();
};


/*
 * Based on which group a user belongs
 */


authorize.minOwnerOfGroup = function(req, res, next){
    //TODO: Implement
    next();
};

authorize.minMemberOfGroup = function(req, res, next){
    //TODO: Implement
    next();
};

module.exports = authorize;