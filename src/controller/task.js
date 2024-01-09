const { createOrUpdateTask, getAllTasks, getTaskById } = require('../database/task')

    const getTasks = async (req, resp) => {

        const response = await getAllTasks();
        return resp.status(200).json(response);
    }
    const createTask = async (req, resp) => {
        
        const { success } = await createOrUpdateTask(req.body);

        if(!success) return resp.status(400).json({ success, data: 'Ocurrió un error al crear la tarea' });

        return resp.status(200).json({ success, data: 'Tarea creada correctamente'});
    }

    const getTaskByKey = async (req, res)=> {
        
        const { id } = req.params;

        const response = await getTaskById(parseInt(id, 10));
        
        if(!response?.data) return res.status(404).json({ success: response.success, data: 'No se encontró ninguna tarea con ese ID'  })
        
        return res.status(200).json(response);
    }

    module.exports = { 
        getTasks,
        createTask,
        getTaskByKey
    }