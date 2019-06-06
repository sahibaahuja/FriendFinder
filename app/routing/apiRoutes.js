var friends = require("../data/friend.js")

module.exports = function (app) {

  app.post("/api/friends", function(req, res) {
      console.log(req.body.total)
      var bestMatch = "shelly"
      var difference = 25
      console.log(friends.length)
      for ( i = 0 ; i < friends.length; i++) {
          var theDifference = Math.abs(friends [i].scores - req.body.total)
      if (theDifference < difference ) {
          console.log(theDifference ,difference)
          difference = theDifference
          bestMatch = friends[i].name
      }
      }
      
    res.send({bestMatch:bestMatch});
  });

  
}