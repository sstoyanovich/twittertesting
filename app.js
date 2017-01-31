var TwitterPackage = require('twitter');
var secret = {
  consumer_key: '0tTnrRHBHc9jzB5hq2c2dAjJw',
  consumer_secret: 'stW3Y0ud7lVqS3u6JwMlKJRw7EcYVzU5HgZJ9VrgBLgfMqgYAA',
  access_token_key: '305105588-GlF1C6r86RT9vNbUBw9FYMCSVgYmQC9mJkRfQ6PA',
  access_token_secret: '2eDxXXVIwbPJ4Jt02F2GpDS3ZbH4YmJhKpLs1pAbE0g83'
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
