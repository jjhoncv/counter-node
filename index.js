const exec = require('child_process').exec

process.argv.forEach(function (date, index, array) {
    // 2019-09-24T20:35
    exec('wget -O ./image/counter.gif https://date-gif.herokuapp.com/generate\?time\='+date+'\&name\=awesome-gif\&frames\=20C')
});