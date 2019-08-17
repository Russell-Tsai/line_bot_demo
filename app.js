var linebot = require('linebot');

//need to login to line developers and create a bot channel 
//and get the information below
var bot = linebot({
    channelId: '1609850322',
    channelSecret: '22a35c1423a73a3955c352d4d4bd2feb',
    channelAccessToken: 'fPsJc0+ovDl46HncQrUgKbOy6kedjo++dZl97967q1RZvf8ncGRMJ5oTfSV1F4OHRNT1y2gS6b0H1nVQDXDEwx9/6UF+ifo0p7LT6EgOc+67+N0HpT+KxAdkzu/Oz1EmMWoaGC4oDK0ZBNlRflwj1QdB04t89/1O/w1cDnyilFU='
})

//when someone send message to bot
bot.on('message', function (event) {
    // event.message.text 是使用者傳給 bot 訊息
    // 使用 event.reply (要回傳的訊息) 方法可以將訊息回傳給使用者

    var replayMsg = `Hello 你剛才說的是 : ${event.message.text}`;

    event.reply(replayMsg).then(function (data) {
        //訊息回傳成功的處理
    }).catch(function (error) {
        //訊息回傳失敗的處理
    });
});

bot.listen('/linewebhook', 3000, function() {
    console.log('[BOT Ready]');
})
