const express = require("express");
const router = require("./router");
const app = express();
const port = 3000;

const swaggerUI = require("./docs");

app.use("/docs", swaggerUI.serve, swaggerUI.setup);

app.use(router);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
