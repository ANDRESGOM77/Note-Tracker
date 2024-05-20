const express = require('express');
const html_routes = require('./Develop/routes/notes-index');
const api_routes = require('./Develop/routes/api_routes');
const paths = require('path');

const PORT =  5001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(html_routes)
app.use(api_routes)

app.listen(PORT, () => {
    console.log(`Working on http://localhost:${PORT}`);
});