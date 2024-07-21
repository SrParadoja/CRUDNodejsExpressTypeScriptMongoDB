//este es el controlador de task(las tareas)

import { Response, Request } from 'express';
import { taskService } from '../services';

export const taskController = {
  /**
   * Obtiene todas las tareas.
   * @param req - La solicitud HTTP.
   * @param res - La respuesta HTTP.
   * @returns La respuesta JSON con una lista de tareas.
   * @throws Si ocurre un error, se devuelve un mensaje de error.
   */
  getAllTask: async (req: Request, res: Response) => {
    try {
      const data = await taskService.getAll();
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      });
    }
  },

  /**
   * Crea una nueva tarea.
   * @param req - La solicitud HTTP que contiene los datos de la tarea en el cuerpo de la solicitud.
   * @param res - La respuesta HTTP.
   * @returns La respuesta JSON con la tarea creada.
   * @throws Si ocurre un error, se devuelve un mensaje de error.
   */
  create: async (req: Request, res: Response) => {
    try {
      const data = await taskService.create(req.body);
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      });
    }
  },

  /**
   * Actualiza una tarea existente.
   * @param req - La solicitud HTTP que contiene el ID de la tarea en los parámetros de ruta y los datos actualizados en el cuerpo de la solicitud.
   * @param res - La respuesta HTTP.
   * @returns La respuesta JSON con la tarea actualizada.
   * @throws Si ocurre un error, se devuelve un mensaje de error.
   */
  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await taskService.update(id, req.body);
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      });
    }
  },

  /**
   * Elimina una tarea existente.
   * @param req - La solicitud HTTP que contiene el ID de la tarea en los parámetros de ruta.
   * @param res - La respuesta HTTP.
   * @returns La respuesta JSON con un mensaje de confirmación de la eliminación.
   * @throws Si ocurre un error, se devuelve un mensaje de error.
   */
  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await taskService.delete(id);
      return res.json(data);
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      });
    }
  },
};
