import multer from 'multer';

// Use memoryStorage to store file in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

export { upload };
