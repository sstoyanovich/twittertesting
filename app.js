var TwitterPackage = require('twitter');
var secret = {
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
}


var Twitter = new TwitterPackage(secret);
Twitter.get('friends/list',{count:100}, function(error,tweet, response){
  if(error) console.log(error);

  var friends = [];
  for(var i = 0; i < tweet.users.length; i++)
  {
    friends.push(tweet.users[i].screen_name);
  }

  Twitter.get('friendships/lookup', {screen_name : friends.toString()}, function(error,tweet,response){
    for(var i = 0; i < tweet.length; i++){
      if(tweet[i].connections.indexOf('followed_by') > 0)
        console.log(friends[i] + " follows me");
    }
})
  //console.log(friends)//.screen_name);
})
