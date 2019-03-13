let express = require('express');
let app = express();
app.use(express.static(__dirname + ''));
let server = require('http').createServer(app);
server.listen(8080, function () {

  console.log('Server listening at port %d', 8080);

});