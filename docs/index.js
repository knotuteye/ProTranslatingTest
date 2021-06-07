const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerConfig = require("./swagger.json");
const specs = swaggerJSDoc(swaggerConfig);

module.exports = { serve: swaggerUI.serve, setup: swaggerUI.setup(specs) };
