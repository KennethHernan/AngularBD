var clientModel = require('../client/clientModel');
var key = '1234567890abcdefgh';
var encryptor = require('simple-encryptor')(key);

module.exports.createClientService = async (clientDetail) => {
    try {
        const result = await clientModel.findOne({ email: clientDetail.email }).exec();
            if(result) {
                console.log('Email Existente');
                return { status: false, msg: "Email Existente"};
            } else{
                const clientModelData = new clientModel({
                    name: clientDetail.name,
                    email: clientDetail.email,
                    password: encryptor.encrypt(clientDetail.password)
                });
        
                console.log('Cliente Datos:', clientModelData);
        
                await clientModelData.save();
                return { status: true, msg: "Usuario Creado" };
            }
    } catch (error) {
        console.error('Error en el Register del usuario:', error);
        return { status: false, msg: "Error al crear usuario" };
    }
};

module.exports.loginClientService = async (clientDetail) => {
    try {
        const result = await clientModel.findOne({ email: clientDetail.email }).exec();
            if(result) {
                const decrypted = encryptor.decrypt(result.password);
                
                if (decrypted == clientDetail.password) {
                    return { status: true, msg: "Bienvenido" };
                } else {
                    return { status: false, msg: "Contraseña Incorrecta" };
                }
            } else{
                
                return { status: false, msg: "Email Incorrecto"};
            }
    } catch (error) {
        console.error('Error en el login del usuario:', error);
        return { status: false, msg: "Datos Invalidos" };
    }
};
