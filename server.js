const express = require('express');
const html_routes = require('./routes/notes-index');
const api_routes = require('./routes/api_routes');

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use('/api',api_routes)
app.use('/',html_routes)

app.listen(PORT, () => {
    console.log(`Working on http://localhost:${PORT}`);
});