const express = require('express');
const fallback = require('express-history-api-fallback');
const app = express();
const dataRouter = require(__dirname + "/routes/data-router.js");

process.env.APP_SECRET = process.env.APP_SECRET

const root = __dirname + '/build';

app.use(express.static(root));
app.use(express.static(__dirname + '/vrview'));

app.use('/api', dataRouter);

app.use(fallback('index.html', { root }));

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server started on port: ' + PORT));
