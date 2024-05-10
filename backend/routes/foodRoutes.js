import express from 'express'
import { uploadFood,getFood } from '../controllers/foodControllers.js';
import {upload} from '../Config/multer-config.js';

const router = express.Router()

router.post("/create",upload.single('foodImage'),uploadFood );
router.post("/fetch",getFood );


export default router;