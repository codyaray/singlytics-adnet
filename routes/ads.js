var _ = require('underscore'),
    util = require('util');

var AD_DB = [
  {
    "id": 0,
    "weights": { "locale": { "en_US": 6, "en_GB": 4}, "gender": { "male": 3, "female": 8 }, "language": {}, "timezone": {}, "location": {} },
    "data": {"category":"dating", "image" : "http://farm9.staticflickr.com/8316/8037143421_eb3cbd0564.jpg","href":"http://www.singly.com"}
  },
  {
    "id": 1,
    "weights": { "locale": { "en_US": 3, "en_GB": 4}, "gender": { "male": 2, "female": 8 }, "language": {}, "timezone": {}, "location": {} },
    "data": {"category":"animals", "image" : "http://farm9.staticflickr.com/8454/8037143501_127043003d.jpg","href":"http://www.singly.com"},
  },
  {
    "id": 2,
    "weights": { "locale": { "en_US": 10 }, "gender": { "male": 8, "female": 2 }, "language": {}, "timezone": {}, "location": {} },
    "data": {"category":"football", "image" : "http://pagead2.googlesyndication.com/pagead/imgad?id=CICAgMDO89iH_AEQrAIY-gEyCCCUZbQUszgq","href":"http://www.nfl.com"}
  },
  {
    "id": 3,
    "weights": { "locale": { "en_US": 2, "en_GB": 4}, "gender": { "male": 4, "female": 2 }, "language": {}, "timezone": {}, "location": {} },
    "data": {"category":"golf", "image" : "http://farm9.staticflickr.com/8316/8037143535_9799b715c4.jpg","href":"http://www.singly.com"}
  },
]

exports.ads = function(req, res) {
  util.log(req.connection.remoteAddress + ": " + req.method + " " + req.url);

  var locale = req.query.locale;
  var gender = req.query.gender;
  var language = req.query.language;
  var interest = req.query.interest;
  
  var scores = {};
  _.each(AD_DB, function(ad) {
    scores[ad.id] = { "id": ad.id, "score": 0 };
    switch(locale) {
      case "en_US":
        scores[ad.id].score += ad.weights.locale["en_US"] || 0;
        break;
      case "en_GB":
        scores[ad.id].score += ad.weights.locale["en_GB"] || 0;
        break;
    }
    switch(gender) {
      case "male":
        scores[ad.id].score += ad.weights.gender["male"] || 0;
        break;
      case "female":
        scores[ad.id].score += ad.weights.gender["female"] || 0;
        break;
    }
  });

  util.log("Scores:\n" + util.inspect(scores));
  var bestAdScore = _.max(scores, function(ad) {
    return ad.score;
  });

  var bestAd = _.find(AD_DB, function(ad) {
    return ad.id == bestAdScore.id;
  });

  res.send(bestAd.data);
};
