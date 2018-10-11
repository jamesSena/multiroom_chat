/**
 * Importar as configurações do servidor
 */
var app = require('./config/server');

/**
 * Parametrizar a porta de serviço
 */
var server = app.listen(3000, function(){
    console.log('Servidor Online');
})

var io = require('socket.io').listen(server);
app.set('io',io);
//criar a conexao por websocket
io.on('connection', function(socket){
    console.log('Usuario conectou!!');
    socket.on('disconnect', function(){
        console.log('Usuario desconectou!!');
    });
});