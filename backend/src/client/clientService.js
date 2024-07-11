const { rejects } = require('assert');
var clientModel = require('../client/clientModel');
const { resolve } = require('path');
var key = '1234567890abcdefgh';
var encryptor = require('simple-encryptor')(key);

module.exports.createClientService = async (clientDetail) => {
    try {
        if (typeof clientDetail.password !== 'string') {
            console.error('Error: Password is not a string');
            return false;
        }

        const clientModelData = new clientModel({
            name: clientDetail.name,
            email: clientDetail.email,
            password: encryptor.encrypt(clientDetail.password)
        });

        console.log('Client data before saving:', clientModelData);

        await clientModelData.save();
        console.log('Creating client');

        return true;
    } catch (error) {
        console.error('Error creating client:', error);
        return false;
    }
};

module.exports.loginClientService = async (clientDetail) => {
    try {
        const result = await clientModel.findOne({ email: clientDetail.email }).exec();
            if(result) {
                const decrypted = encryptor.decrypt(result.password);
                if (decrypted === clientDetail.password) {
                    return { status: true, msg: "Cliente Valido" };
                } else {
                    return { status: false, msg: "Contraseña Incorrecta" };
                }
            } else{
                return { status: false, msg: "Email Incorrecto" };
            }
    } catch (error) {
        console.error('Error en el login del cliente:', error);
        return { status: false, msg: "Datos Invalidos" };
    }
};
