import express from 'express';
import multer from 'multer';
import { createProduct, getProducts, updateProduct, deleteProduct, getProductById, deleteAllProducts } from '../controllers/productController';
import productValidation from '../middleware/productValidation';
import authenticate from '../middleware/authenticate';
import asyncHandler from '../middleware/asyncHandler';

const router = express.Router();

// Configuração do multer com limite de tamanho
const storage = multer.memoryStorage(); // Armazenamento em memória (você pode ajustar para armazenamento em disco se preferir)

const upload = multer({
  limits: {
    fileSize: 1 * 1024 * 1024, // Limite de 1MB (1 megabyte)
  },
  fileFilter: (req, file, cb) => {
    // Filtro para aceitar apenas tipos específicos, por exemplo, imagens
    const filetypes = /jpeg|jpg|png|gif/; // Tipos de arquivo aceitos
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Apenas arquivos de imagem são aceitos!'));
    }
  },
});


router.post('/', upload.single('image'), productValidation, asyncHandler(createProduct));
router.get('/', asyncHandler(getProducts));
router.get('/:id', asyncHandler(getProductById)); 
router.put('/:id',  upload.single('image'), productValidation, asyncHandler(updateProduct));
router.delete('/:id', asyncHandler(deleteProduct));
router.delete('/', asyncHandler(deleteAllProducts));

export default router;
