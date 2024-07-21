//ruta de las tareas que interáctua con los demás .ts

import { Router } from 'express';
import { taskController } from '../controllers';

const router = Router();

/**
 * @swagger
 * /api/task:
 *   get:
 *     summary: Obtiene todas las tareas
 *     responses:
 *       200:
 *         description: Una lista de tareas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', taskController.getAllTask);

/**
 * @swagger
 * /api/task:
 *   post:
 *     summary: Crea una nueva tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tarea creada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post('/', taskController.create);

/**
 * @swagger
 * /api/task/{id}:
 *   patch:
 *     summary: Actualiza una tarea existente
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tarea actualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.patch('/:id', taskController.update);

/**
 * @swagger
 * /api/task/{id}:
 *   delete:
 *     summary: Elimina una tarea existente
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea eliminada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.delete('/:id', taskController.delete);

export default router;

