var mongoose = require('./HeadsUp/node_modules/mongoose/index');
var Detection = new mongoose.Schema({
  location: { type: String },
  appliances: Number,
  since: String
});

mongoose.model('Detection', Detection);
mongoose.connect('mongodb://localhost/');

console.log('we are connected');
