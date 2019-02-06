const exec = require('child_process').exec

process.argv.forEach(function (date, index, array) {
    // 2019-09-24T20:35
    // console.log(new Date().getTime())

    exec('wget -O ./image/aa.gif https://date-gif.herokuapp.com/generate\?time\='+val+'T20:35\&name\=awesome-gif\&frames\=20C')
});