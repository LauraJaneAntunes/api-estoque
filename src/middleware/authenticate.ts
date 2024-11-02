import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

interface JwtPayload {
    id: string;
}

// Extendendo a interface Request para incluir o userId
interface CustomRequest extends Request {
    userId?: string; // ou 'number', dependendo do tipo de 'id' no seu JWT
}

const authenticate = (req: CustomRequest, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(401).json({ error: "Token não fornecido" });
        return; // Apenas encerra a função sem retornar um valor
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ error: "Token inválido" });
            return; // Apenas encerra a função sem retornar um valor
        }

        // Define decoded como JwtPayload para garantir que tenha o formato esperado
        const payload = decoded as JwtPayload;
        req.userId = payload.id; // Armazena o id do payload na requisição
        next(); // Chama o próximo middleware
    });
};

export default authenticate;
