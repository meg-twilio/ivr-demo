const app = require('./app');
const config = require('./config');


// --------------------- START SERVER --------------------- //

const server = app.listen(config.port, function() {
    console.log(`Express server listening on port ${server.address().port}`);
});

module.exports = server;
