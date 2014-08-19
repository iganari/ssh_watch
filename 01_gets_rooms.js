var Hipchatter = require('hipchatter');
var hipchatter = new Hipchatter('user_API');

// this will list all of your rooms
    hipchatter.rooms(function(err, rooms){
        if(!err) console.log(rooms)
    });
