const AWS = require('aws-sdk');
require('aws-sdk/lib/maintenance_mode_message').suppress = true;

const connectDatabase = function() {
    try {
        AWS.config.update({
            region: 'us-east-2',
            accessKeyId: process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY
        })
        
        return new AWS.DynamoDB.DocumentClient();
    } catch (error) {
        console.error('Ocurrió un error al conectarse a la BD', error);
        return null
    }
}


module.exports = {
    connectDatabase
}