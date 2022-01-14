const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");

const cardRouter = require("./Routes/route");

const PORT = process.env.PORT || 8080;

const app = express();

// Apply middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/card", cardRouter);

// Implement 500 error route
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something is broken.");
});

//Implement 404 error route
app.use((req, res, next) => {
    res.status(404).send("Sorry we couldn't find that.");
});

// start server
app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}/`);
});
