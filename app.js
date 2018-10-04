/**
 * Importar as configurações do servidor
 */
var app = require('./config/server');

/**
 * Parametrizar a porta de serviço
 */
app.listen(3000, function(){
    console.log('Servidor Online');
})