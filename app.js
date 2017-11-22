var express = require('./HeadsUp/node_modules/express/index');
const bodyParser= require('./HeadsUp/node_modules/body-parser/index');

var path = require('./node_modules/path/index');
var favicon = require('./node_modules/serve-favicon/index');
var cookieParser = require('./HeadsUp/node_modules/cookie-parser/index');


var app = express();
var db = require('./db');
var detection = require('./detected');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname,'index.html');
// });

app.post('/detections', detection.createDetection);
app.get('/detections', detection.seeResults);
app.delete('/detections/:id', detection.delete);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
if (app.get('env== "development"')) {
  app.listen(3000, function () {
    console.log('Example listening on port 3000!');
  });
}
else{
  app.listen(8080, function () {
    console.log('Example listening on port 8080!');
  });
}
module.exports = napp;
