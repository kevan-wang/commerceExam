module.exports = {
    retrieveAllTHINGs : function(request, response) {
    },

    retrieveOneTHING : function(request, response) {
        THING.find({}, function(err, THINGs) {
            res.json(THINGs)
        })
    },

    createTHING : function(request, response) {
    },

    updateTHING : function(request, response) {
    },

    destroyTHING : function(request, response) {
    }
    // any other functions that will be linked to routes
}