import { Request, Response, NextFunction } from 'express';
import { userService } from '../services/user.service';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        // Verifica el token y asigna el usuario al objeto req
        req.user = userService.verifyToken(token);
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

