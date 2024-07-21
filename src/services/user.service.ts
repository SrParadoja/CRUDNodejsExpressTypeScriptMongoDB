// src/services/user.service.ts
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.model';
import { JWT_SECRET } from '../config';

/**
 * Servicio para la gestión de usuarios.
 */
export const userService = {
    /**
     * Registra un nuevo usuario.
     * @param username - Nombre de usuario.
     * @param password - Contraseña del usuario.
     * @returns El nuevo usuario.
     */
    register: async (username: string, password: string) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({ username, password: hashedPassword });
        return user.save();
    },

    /**
     * Inicia sesión de un usuario.
     * @param username 
     * @param password 
     * @returns Un token JWT si las credenciales son válidas.
     */
    login: async (username: string, password: string) => {
        const user = await UserModel.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error('Credenciales inválidas');
        }
        const token = jwt.sign({ id: user._id }, JWT_SECRET as string, { expiresIn: '1h' });
        return token;
    },

    /**
     * Verifica el token JWT.
     * @param token
     * @returns El payload del token si es válido.
     */
    verifyToken: (token: string) => {
        return jwt.verify(token, JWT_SECRET as string);
    }
};
