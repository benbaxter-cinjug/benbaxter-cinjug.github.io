var app, express, passport;
var path = require('path');

express = require('express');

app = express();


app.engine('html', require('ejs').render);
app.use(express.static(path.join(__dirname, '../www')));

require('./routes')(app);

app.listen(process.env.PORT || 3000);