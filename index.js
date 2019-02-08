const exec = require('child_process').exec
const express = require('express')
const app = express()
const moment = require('moment');
const CountdownGenerator = require('./libs/countdown-generator');

app.use(express.static('public'))

var path = `/public/static/imgs/`
const tmpDir = __dirname + path;


app.get('/send', function (req, res) {
  // console.log(req)
  var { subject, email, date, timer, remaining } = req.query;
  // // 2019-09-24T20:35
  
  // var duration = moment(`${date} ${timer}`, 'MMM DD, YYYY hh:mm a').format('YYYY-MM-DDThh:mm')
  // // console.log(duration.toString())
  // console.log(`wget -O ${path} https://date-gif.herokuapp.com/generate\?time\=${duration.toString()}\&name\=counter.gif`)
  // exec(`wget -O ${path} https://date-gif.herokuapp.com/generate\?time\=${duration.toString()}\&name\=counter.gif`, function(){
  //   res.send(arguments);
  // })
  

  // moment(`${date} ${timer}`, )
  // subject: 'awd aw',
  // email: 'jjhoncv@gmail.com',
  // date: 'Feb 07, 2019',
  // timer: '06:43 PM',
  // remaining:

  CountdownGenerator.init(remaining, () => {
    let filePath = tmpDir + name + '.gif';
    res.sendFile(filePath);
});

})
 
app.listen(3000)

// console.log(process.argv[2]);

// process.argv.forEach(function (date, index, array) {
    // 2019-09-24T20:35
    // console.log(new Date().getTime())
    // console.log(date[2])
    // exec('wget -O ./image/counter.gif https://date-gif.herokuapp.com/generate\?time\='+date[2]+'T20:35\&name\=counter')
// });