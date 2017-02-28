var contentstack = require("contentstack-express"),
    basicAuth = require('basic-auth-connect'),
    app = contentstack(),
    config = contentstack.config,
    server = config.get("server"),
    environment = config.get("environment"),
    port = process.env.PORT || config.get("port");
 
/**
* start the application
*/
app.use(basicAuth('built', 'built123'));
app.listen(port, function() {
    console.log("Server(%s) is running on '%s' environment over %d port", server, environment, port);
});