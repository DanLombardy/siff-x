const express = require('express');
const app = express();
const dataRouter = require(__dirname + "/routes/data-router.js");

process.env.APP_SECRET = process.env.APP_SECRET

app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/vrview'))

app.use('/api', dataRouter);

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server started on port: ' + PORT));
