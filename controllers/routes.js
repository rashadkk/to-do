var todo=require('./model.js')



exports.Home=function(request,response){
      new todo().fetchAll().then(tasks =>{
        response.render('todo',{
            todo: tasks.toJSON()
        })
      })
    };
    

exports.addTodo=function(request,response,){
    
       var item=request.body.item;
        new todo({
            todo:item
        }).save().then(todo => response.json(todo))   
    
    }

    exports.deleteTodo=function(request,response){
        new todo({ id:request.body.id}).destroy().then(tasks=>{
           return response.json({status:true,tasks})
        })
        }