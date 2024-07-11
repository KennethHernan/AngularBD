var clientService = require('../client/clientService');

var createClientController = async (req, res) => {
    try
    {
        console.log(req.body);
        var status = await clientService.createClientService(req.body);
        console.log(status);
        
        if (status) {
            res.send({ "status": true, "menssage": "Cliente Creado" });
        } else {
            res.send({ "status": false, "menssage": "Error al crear cliente" });
        }
    } catch(err)
    {
        console.log(err);
        res.status(500).send("Error interno del servidor");
    }
};

const loginClientController = async (req, res) => {
    try 
    {
        console.log(req.body);
        var status = await clientService.loginClientService(req.body);
        console.log(status);

        if (status) {
            res.status(200).send({ "status": true, "message": "Cliente autenticado" });
        } else {
            res.status(401).send({ "status": false, "message": "Credenciales incorrectas" });
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