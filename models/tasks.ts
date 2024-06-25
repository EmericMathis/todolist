import { Schema, model, models } from 'mongoose';

import { ITask } from '@/types';

const taskSchema = new Schema<ITask>({
    task: {
        type: String,
        required: [true, 'Task is required'] // message d'erreur si le champ est vide 
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = models.Task || model<ITask>('Task', taskSchema); // si le model existe déjà on le récupère sinon on le crée en utilisant le schema taskSchema

export default Task;