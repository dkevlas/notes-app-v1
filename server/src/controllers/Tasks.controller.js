import { ErrorUnknown } from "../libs/ErrorUnknown.js"
import TaskModel from "../models/Task.model.js"

class Tasks {
    async getTasks(req, res){
        try{
            const { id, username } = req.user
            const tasks = await TaskModel.find({userID: id}).sort({ createdAt: -1 });
            if(!tasks) return res.status(404).json({
                success: false,
                message: "No se encontraron las tareas"
            })
            res.json({
                success: true,
                success_message: `Bienvenido ${username}`,
                username: username,
                notes: tasks
            })
        } catch(err){
            ErrorUnknown(err, res)
        }
    }
    async createTask(req, res){
        try{
            const { id } = req.user
            const newTask = new TaskModel({
                ...req.body,
                userID: id
            })
            await newTask.save()
            res.json({
                success: true,
                success_message: "Se creó la nota exitósamente"
            });
        } catch(err){
            ErrorUnknown(err, res)
        }
    }
    async updateTask(req, res){
        try{
            const { id } = req.params
            const TaskFound = await TaskModel.findByIdAndUpdate(id, req.body, {new: true})
            if(!TaskFound) return res.status(404).json({
                success: false,
                message: "No se pudo actualizar"
            })
            res.json({
                success: true,
                success_message: "Se actualizó la Nota"
            })
        } catch(err){
            ErrorUnknown(err, res)
        }
    }
    async deleteTask(req, res){
        try{
            const { id } = req.params
            const TaskFound = await TaskModel.findByIdAndDelete(id)
            if(!TaskFound) return res.status(404).json({
                success: false,
                message: "No se encontró la tarea"
            })
            res.json({
                success: true,
                success_message: "Se eliminó la Nota",
            })
        } catch(err){
            ErrorUnknown(err, res)
        }
    }
}

export default new Tasks();
