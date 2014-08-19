var Hipchatter = require('hipchatter');
var hipchatter = new Hipchatter('rooms_api');

    hipchatter.notify('room_id',
    {
        message: 'Hello iganari !!',
        color  : 'green', 
        token  : 'rooms_api',
        notify : true
    }, function(err){
        if (err == null) console.log('Successfully notified the room.');
    });
