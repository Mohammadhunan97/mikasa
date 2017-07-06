const express = require('express');
const app = express();
const ScreenRecorder = require('screen-recorder').ScreenRecorder
const path = require('path');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const c = console.log;

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())





let strvid = 'public/erwin.webm';

app.get("/",function(req,res){
  res.send("<video width='500px' height='auto' controls><source src='" + strvid + "' type='video/mp4'>Your browser does not support the video tag.</video>")
})

app.listen(3000,function(err){
  c(err?"some error occured"+err:"listening on 3000");
})





let movie = new ScreenRecorder(path.resolve(__dirname, 'public/recordings/rodd.webm')) // [, displayId]
movie.setCapturesMouseClicks(true)
// movie.setCropRect()
movie.setFrameRate(30) // default is 15
movie.recordAudio()
movie.start()

function minutesToSeconds(mins_wanted){
  return mins_wanted * 60000;
}

setTimeout(function() {
  movie.stop()
  c("vid record end");
}, minutesToSeconds(2)) //100 seconds 

