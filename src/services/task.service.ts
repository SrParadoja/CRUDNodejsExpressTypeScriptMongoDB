import { TaskModel } from '../models';

export const taskService = {
  /**
   * Obtiene todas las tareas.
   * @returns Una promesa que resuelve con una lista de todas las tareas en la base de datos.
   * @throws {Error} Si ocurre un error al recuperar las tareas.
   */
  getAll: async () => {
    return await TaskModel.find();
  },

  /**
   * Crea una nueva tarea.
   * @param entity - El objeto de tarea que se va a crear. Debe contener los datos de la tarea.
   * @returns Una promesa que resuelve con la tarea creada.
   * @throws {Error} Si ocurre un error al crear la tarea.
   */
  create: async (entity: object) => {
    return await TaskModel.create(entity);
  },

  /**
   * Actualiza una tarea existente.
   * @param id 
   * @param body 
   * @returns 
   * @throws {Error} 
   */
  update: async (id: string, body: object) => {
    return await TaskModel.findByIdAndUpdate(id, body, { new: true });
  },

  /**
   * Elimina una tarea existente.
   * @param id - El ID de la tarea que se va a eliminar.
   * @returns Una promesa que resuelve con la tarea eliminada.
   * @throws {Error} Si ocurre un error al eliminar la tarea.
   */
  delete: async (id: string) => {
    return await TaskModel.findByIdAndDelete(id);
  }
};
