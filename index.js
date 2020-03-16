const app = require('./app');
const config = require('./config');


// --------------------- START SERVER --------------------- //

module.exports = app.listen(config.port, function() {
    console.log(`Express server listening on port ${server.address().port}`);
});