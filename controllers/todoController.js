var data=[{item:'buy books'},{item:'buy milk'},{item:'study css'}];

var routes=require('./routes');

module.exports=function(app){
   
app.get('/',routes.Home);

app.post('/',routes.addTodo);

app.delete('/',routes.deleteTodo);

}