import express from "express";
import { getAllStudents, createStudent } from "../controllers/studentController.js";

const router = express.Router();

router.get('/getall', getAllStudents);
router.post('/', createStudent);
router.get('/signin')

export default router;


