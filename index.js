var express = require('express');
var Hottie = require('./models/hottie');
var bodyParser =  require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://Hoanglong:Hoanglong@ds251245.mlab.com:51245/android9-gxtg',
{
  useMongoClient: true
});

// var hottie = new Hottie(
//   {
//     name: "bird1",
//     age: 2,
//     image: "https://files.allaboutbirds.net/wp-content/uploads/2015/06/prow-featured.jpg"
//   }
// );
//
// hottie.save();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/api/gxtg',function(req,res){
  Hottie.find(function(err,hotties){
    if(err){
      res.json({success: 0 , message:"Could not get data from MLab.com"})
    }else{
      res.json(hotties);
    }
  });
});



app.post('/api/gxtg',function(req,res){
  var body = req.body;

  var name = body.name;
  var age = body.age;
  var image = body.image;

  var hottie = new Hottie({
    name: name,
    age: age,
    image: image
  });

  hottie.save(function(err,addedHottie){
    if(err){
      res.json({success:0,message:'Could not add record' + err});
    }else{
      res.json(addedHottie);
    }
  });
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
