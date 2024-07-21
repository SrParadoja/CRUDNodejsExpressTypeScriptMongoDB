import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.model';
import { JWT_SECRET } from '../config';
import { userService } from '../services';

/**
 * Obtiene todos los usuarios.
 * @param req - La solicitud HTTP.
 * @param res - La respuesta HTTP.
 */
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
};

/**
 * Obtiene un usuario por su ID.
 * @param req - La solicitud HTTP.
 * @param res - La respuesta HTTP.
 */
export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario' });
    }
};

/**
 * Crea un nuevo usuario.
 * @param req - La solicitud HTTP.
 * @param res - La respuesta HTTP.
 */
export const createUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
};

/**
 * Inicia sesión de un usuario.
 * @param req - La solicitud HTTP.
 * @param res - La respuesta HTTP.
 */
export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!JWT_SECRET) {
        return res.status(500).json({ message: 'Error de configuración del servidor' });
    }

    try {
        const user = await UserModel.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};
