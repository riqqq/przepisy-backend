module.exports = function(app) {
    var przepisy = require('../controllers/przepis.controller');

    app.post('/api/przepis', przepisy.createPrzepis);
    app.get('/api/przepis/:id', przepisy.getPrzepis);
    app.get('/api/przepisy', przepisy.przepisy);
    app.put('/api/przepis', przepisy.updatePrzepis);
    app.delete('/api/przepis/:id', przepisy.deletePrzepis);
}