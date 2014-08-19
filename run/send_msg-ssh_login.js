var Hipchatter = require('hipchatter');
var hipchatter = new Hipchatter('rooms_api');

    hipchatter.notify('room_id',
    {
        message: "hostnameに"+process.argv[3]+'が'+process.argv[2]+'としてログインしてきたよ！',
        color:   'green',
        token:   'room_api',
        notify: true
    }, function(err){
        if (err == null) console.log('Successfully notified the room.');
    });

