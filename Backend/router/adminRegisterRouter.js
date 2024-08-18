import express from "express";
// import { adminSignIn } from "../controllers/usersControllers.js";
import { adminRegister } from "../controllers/adminRegisterController.js";

const router = express.Router();

// router.post('/admin/signin', adminSignIn);
router.post('/admin', (req, res, next) => { 
  console.log("Request received at /admin");  
  adminRegister(req, res, next);  
});

export default router; 
