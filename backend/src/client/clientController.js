var clientService = require('../client/clientService');

var createClientController = async (req, res) => {
    try
    {
        console.log(req.body);
        var status = await clientService.createClientService(req.body);
        
        console.log('ESTATUS: '+status.status);
        if (status.status) {
            res.send({ "status": true, "message": status.msg });
        } else {
            res.send({ "status": false, "message": status.msg });
        }
    } catch(err)
    {
        console.error('Error en el controlador de Registro:', err);
        res.status(500).send({ "status": false, "message": "Error en el servidor" });
    }
};

const loginClientController = async (req, res) => {
    try 
    {
        console.log(req.body);
        var status = await clientService.loginClientService(req.body);

        if (status.status) {
           res.send({ "status":true, "message": status.msg });
        } else {
            res.send({ "status":false, "message": status.msg });
        }
    } catch (error) {
        console.error('Error en el controlador de login:', error);
        res.status(500).send({ "status": false, "message": "Error en el servidor" });
    }
};
    
module.exports = { 
    createClientController,
    loginClientController
};