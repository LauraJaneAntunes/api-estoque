import jwt from 'jsonwebtoken';
import crypto from 'crypto';

// Gera uma chave secreta aleatória
const JWT_SECRET = crypto.randomBytes(32).toString('hex');
const JWT_EXPIRES_IN = '24h';

// Função para gerar o token JWT
const gerarToken = (userId: string): string => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

// Exemplo de uso
const novoToken = gerarToken('id_do_usuario');
console.log('Nova Chave Secreta JWT:', JWT_SECRET);
console.log('Novo Token JWT:', novoToken);

// pra rodar execute: npx ts-node generateSecret.ts
