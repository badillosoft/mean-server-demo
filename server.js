const http = require("http");
const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

http.createServer(app).listen(port, () => {
    console.log(`Server started at http://localhost:${port}/`);
});