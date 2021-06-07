const express = require("express");
const router = require("./router");
const app = express();
const port = 3000;

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerConfig = require("./swagger.json");
const specs = swaggerJSDoc(swaggerConfig);

app.use(router);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
