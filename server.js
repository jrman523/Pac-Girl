const express = require('express');
const path = require('path');
const Bundler = require('parcel-bundler');


const bundler = new Bundler('./index.html');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bundler.middleware());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});