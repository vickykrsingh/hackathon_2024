import express from 'express';
import { uploadFood, getFood } from '../controllers/foodControllers.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create',requireSignIn, uploadFood);
router.post('/fetch',requireSignIn, getFood);

export default router;
