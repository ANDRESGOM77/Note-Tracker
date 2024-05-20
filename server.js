const express = require('express');
const html_routes = require('./routes/notes-index');
const api_routes = require('./routes/api_routes');
const paths = require('path');

const PORT =  5001;
const app = express();


app.use(express.json());
app.use(express.static("public"));
app.use(html_routes)
app.use(api_routes)

app.listen(PORT, () => {
    console.log(`Working on http://localhost:${PORT}`);
});