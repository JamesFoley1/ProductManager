const express = require('express');
const app = express();
const path = require('path');
const transmogrify = require('./server/routes/routes');
transmogrify(app);

app.use(express.static(__dirname + '/manager/dist/manager'));

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./manager/dist/manager/index.html"))
  });

app.listen(5000);