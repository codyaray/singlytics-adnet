exports.ads = function(req, res){

  var locale = req.query.locale;
  var gender = req.query.gender;
  var language = req.query.language;
  var timezone = req.query.timezone;
  var interest = req.query.interest;
  
  //res.send('{"category":"sports", "image" : "http://upload.wikimedia.org/wikipedia/commons/2/24/Ad-sports-300x250.jpg","href":"http://www.singly.com"},"locale":'  + locale + ',"gender":' + gender + ',"language":' + language + ',"timezone":' + timezone + '}');

 
  if(locale == 'en_US' && gender == 'female' && interest == 'computers'){
    res.send('{"category":"dating", "image" : "http://farm9.staticflickr.com/8316/8037143421_eb3cbd0564.jpg","href":"http://www.singly.com"}');
  }
    else if(locale == 'en_US' && gender == 'male' && interest == 'kittens'){
    res.send('{"category":"animals", "image" : "http://farm9.staticflickr.com/8454/8037143501_127043003d.jpg","href":"http://www.singly.com"}');
  }
    else if(locale == 'en_US' && interest == 'golf'){
    res.send('{"category":"golf", "image" : "http://farm9.staticflickr.com/8316/8037143535_9799b715c4.jpg","href":"http://www.singly.com"}');
  }
  else {
   res.send('{"category":"none", "image" : "none","href":"nothing"}'); 
  };
};