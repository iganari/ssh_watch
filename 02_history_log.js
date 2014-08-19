var Hipchatter = require('hipchatter');
var hipchatter = new Hipchatter('user_API');

    hipchatter.history('room_id', function(err, history){
        // print the last message
        var length = history.items.length;
        history.items.forEach(function(item){
          console.log(item)
        });
    });
