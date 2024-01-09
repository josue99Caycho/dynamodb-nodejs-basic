const { connectDatabase } = require('../database/config');


const createOrUpdateTask = async (data = {})=> {

    const params = { TableName: process.env.TABLE, Item: data };

    try {
        await connectDatabase().put(params).promise();
        return { success: true }
    } catch (error) {
        return { success: false }
    }
}

const getAllTasks = async ()=> {
    try {
        const { Items = [] } = await connectDatabase().scan({ TableName: process.env.TABLE }).promise();
        return { success: true, data: Items }
    } catch (error) {
        return { success: false }
    }
}

const getTaskById = async (id) => {
    try {
        const { Item } = await connectDatabase().get({ TableName: process.env.TABLE, Key: { id } }).promise();
        return { success: true, data: Item }
    } catch (error) {
        return {success: false }
    }
}


module.exports = {
    createOrUpdateTask,
    getAllTasks,
    getTaskById
}