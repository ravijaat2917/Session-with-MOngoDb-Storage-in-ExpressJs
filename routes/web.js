import express from 'express';
import Studentcontroller from '../controller/studentController.js';
const router = express.Router();

router.get('/' , Studentcontroller.session_example);

export default router;