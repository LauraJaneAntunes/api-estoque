import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET || "seu_segredo_jwt";

interface JwtPayload {
    id: string;
  }
  
  const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Token não fornecido" });
  
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ error: "Token inválido" });
  
      // Define decoded como JwtPayload para garantir que tenha o formato esperado
      const payload = decoded as JwtPayload;
      req.userId = payload.id;
      next();
    });
  };
  
  export default authenticate;
