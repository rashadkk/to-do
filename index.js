var express=require('express');
var app=express();
var bodyParser=require('body-parser');

var todoController=require('./controllers/todoController.js');

app.set('port',process.env.PORT || 5000)

app.set('view engine','ejs'); 

var path=require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

todoController(app);

app.listen(app.get('port'),function(){
    console.log('listening to the port 5000');
});

