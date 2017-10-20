const knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : 'localhost',
        user     : 'root',
        password : 'bititude',
        database : 'tasks',
        charset  : 'utf8'
    }
});
var bookshelf = require('bookshelf')(knex);
  
module.exports = bookshelf.Model.extend({
    tableName: 'todo'
});