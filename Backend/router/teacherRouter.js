import express from "express";

import { createTeacher, getAllTeachers, signin } from "../controllers/teacherController.js";

const router = express.Router();

router.post('/', createTeacher);
router.get('/getall', getAllTeachers);
// router.post('/signin',signin); 



export default router;
 
