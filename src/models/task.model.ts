import { Schema, model } from 'mongoose';

/**
 * Esquema para una tarea en la base de datos.
 * @typedef {Object} Task
 * @property {string} task - El nombre o título de la tarea.
 * @property {string} date - La fecha asociada con la tarea.
 * @property {string} description - Una descripción detallada de la tarea.
 * @property {boolean} status - El estado de la tarea, por defecto es `true`.
 */
const taskSchema = new Schema({
    /**
     * El nombre o título de la tarea.
     * @type {String}
     */
    task: {
        type: String
    },

    /**
     * La fecha asociada con la tarea.
     * @type {String}
     */
    date: {
        type: String,
    },

    /**
     * Una descripción detallada de la tarea.
     * @type {String}
     */
    description: {
        type: String
    },

    /**
     * El estado de la tarea.
     * @type {Boolean}
     * @default true
     */
    status: {
        type: Boolean,
        default: true
    }
});

/**
 * Modelo de Mongoose para una tarea.
 * @type {import('mongoose').Model<Task>}
 */
export const TaskModel = model('tasks', taskSchema);
