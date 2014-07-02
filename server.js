/**

 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', routes.index);
app.get('/users', user.list);

app.use( function( req, res ) {
  res.send( 404, 'nothing here' );
});

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
