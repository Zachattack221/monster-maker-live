const profile = require('express').Router();
const auth = require("../utils/auth");
const {User, Character} = require("../models");


profile.get('/', auth, async (req, res) => {
  const data = await User.findOne({
    where: {
      isOnline: true
    },
    include: [{model: Character, 
      attributes: [
                "monster", 
                "character_type",
                "description",
                "weapons",
                "health",
                "user_id",
              ]}, 
            ]
  });
  if(data){
 
const userStats = JSON.parse(JSON.stringify(data));
  // res.send(userStats);

  res.render("profile", {userStats, isOnline: req.session.isOnline});
  }
  else{
    res.json({message: "Something went wrong"});
  }
});

module.exports = profile;
