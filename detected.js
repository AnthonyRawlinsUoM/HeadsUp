require('./HeadsUp/node_modules/mongoose/index').model('Detection');

var mongoose = require('./HeadsUp/node_modules/mongoose/index');
var Detection = mongoose.model('Detection');

module.exports = {
  createDetection: function (req, res) {
    var d = req.body;
    new Detection({ location: d.location, appliances: d.appliances, since: d.since })
      .save(function (err) {
        if (err) {
          res.status(504);
          res.end(err);
        } else {
          console.log('Detection saved');
          res.end();
        }
      });
  },
  seeResults: function (req, res, next) {
    Detection.find({}, function (err, docs) {
      if (err) {
        res.status(504);
        res.end(err);
      } else {
        for (var i = 0; i < docs.length; i++) {
          console.log('Detection:', docs[i].location);
        }
        res.end(JSON.stringify(docs));
      }
    });
  },
  delete: function( req, res, next) {
    console.log(req.params.id);
    Detection.find({ _id: req.params.id}, function(err) {
      if(err) {
        req.status(504);
        req.end();
        console.log(err);
      }
    }).remove(function (err) {
      console.log(err);
      if (err) {
        res.end(err);
      } else {
        res.end();
      }
    });
  }
}
