const THINGController = require("../controllers/THING.ctrl")

module.exports = function (app) {
    app.get('/api/THINGs', THINGController.retrieveAllTHINGs)
    app.get('/api/THINGs/:id', THINGController.retrieveOneTHING)
    app.post('/api/THINGs', THINGController.createTHING)
    app.put('/api/THINGs/:id', THINGController.updateTHING)
    app.delete('/api/THINGs/:id', THINGController.destroyTHING)
    // any additional routes and their coincident functions
}

