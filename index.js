const express = require('express')
const app = express()
const port = 4000
const router = require("./users")


app.listen(port, () =>
    console.log(`running app-listening on port ${port}!`));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//app.use("/api/v1", router)
app.use("/", router)
