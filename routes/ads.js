exports.ads = function(req, res){

  var locale = req.query.locale;
  var gender = req.query.gender;
  var language = req.query.language;
  var timezone = req.query.timezone;
  var interest = req.query.interest;
  
  //res.send('{"category":"sports", "image" : "http://upload.wikimedia.org/wikipedia/commons/2/24/Ad-sports-300x250.jpg","href":"http://www.singly.com"},"locale":'  + locale + ',"gender":' + gender + ',"language":' + language + ',"timezone":' + timezone + '}');

 
  if(locale == 'en_US' && gender == 'male'){
    res.send('{"category":"fashion", "image" : "http://upload.wikimedia.org/wikipedia/commons/2/24/Ad-fashion-300x250.jpg","href":"http://www.singly.com"}');
    console.log('en_us and i am a boy!!!!')
  }
    else if(locale == 'en_US' && gender == 'female'){
    res.send('{"category":"fashion", "image" : "http://upload.wikimedia.org/wikipedia/commons/2/24/Ad-fashion-300x250.jpg","href":"http://www.singly.com"}');
    console.log('en_us and i am a girl!!!!')
  }
    else if(locale == 'en_US' && gender == 'unefined'){
    res.send('{"category":"fashion", "image" : "http://upload.wikimedia.org/wikipedia/commons/2/24/Ad-fashion-300x250.jpg","href":"http://www.singly.com"}');
    console.log('en_us i am a pat!!!!')
  }
    else if (locale == 'en_CA') {
    res.send('{"category":"motors", "image" : "http://upload.wikimedia.org/wikipedia/commons/2/24/Ad-motors-300x250.jpg","href":"http://www.singly.com"}');
    console.log('canada, eh')
  }
    else if (locale == 'en_US' && interest == "golf") {
    res.send('{"category":"home", "image" : "http://upload.wikimedia.org/wikipedia/commons/2/24/Ad-home-300x250.jpg","href":"http://www.singly.com"}');
    console.log('i like golf')
  }
    else if (locale == 'en_US' && interest == "computers" || interest == "programming") {
    res.send('{"category":"electronics", "image" : "http://upload.wikimedia.org/wikipedia/commons/2/24/Ad-electronics-300x250.jpg","href":"http://www.singly.com"}');
    console.log('i am a nerd')
  }
    else if (locale == 'en_US' && interest == "college" || interest == "education" || interest == "video") {		
    res.send('{"category":"electronics", "image" : "http://upload.wikimedia.org/wikipedia/commons/2/24/Ad-electronics-300x250.jpg","href":"http://www.singly.com"}');
    console.log('i like video')
  };
};