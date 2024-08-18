import { handleValidationError } from "../middlewares/errorHandler.js";
import {Admin } from "../models/adminRegisterSchema.js";
import { Student } from "../models/studentSchema.js";
import { Teacher } from "../models/teacherSchema.js";

export const adminSignIn = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    if (!email || !password) {
      handleValidationError("Please provide email and password", 400);
    }
    const existingAdmin = await Admin.findOne({ email });

    if (!existingAdmin) {
      return res.status(200).json({ success: false, message: "Invalid email" });
    }

    const correctPassword = existingAdmin.password;

    if(correctPassword !== password){
      return res.send(200).json({ success: false, message: "Invalid password" });
    }



    res.status(200).json({
      success: true,
      message: "Admin signed in successfully",

    });
  } catch (err) {
    return res.status(401).json({success: false, message: "bad Requests"});
  }
};

export const studentSignIn = async (req, res, next) => {
  const { email, password } = req.body;

  console.log('Received email:', email);
  console.log('Received password:', password);

  try {
    if (!email || email.trim() === '' || !password || password.trim() === '') {
      return res.status(200).json({ success: false, message: "Please provide both email and password" });
    }

    const existingStudent = await Student.findOne({ email });
    console.log('Found student:', existingStudent);

    if (!existingStudent) {
      return res.status(200).json({ success: false, message: "Invalid email or password" });
    }

    if (existingStudent.password !== password) {
      return res.status(200).json({ success: false, message: "Invalid email or password" });
    }

    return res.status(200).json({
      success: true,
      message: "Student signed in successfully",
    });
  } catch (err) {
    return res.status(401).json({success: false, message: "bad Requests"});
  }
};


export const teacherSignIn = async (req, res, next) => { 
  const { email, password } = req.body;
  console.log(email,password);
  try {
    if (!email || !password) {
      handleValidationError("Please provide email and password", 400); 
    }
    // Your sign-in logic for teacher goes here
    const existingTeacher = await Teacher.findOne({email})
    console.log(existingTeacher);
    if(!existingTeacher){
        return res.status(200).json({ success: false, message: "Invalid email or password" });
    }
    if (existingTeacher.password !== password) {
      return res.status(200).json({ success: false, message: "Invalid email or password" });
    }
    res.status(200).json({
      success: true,
      message: "Teacher signed in successfully",
    });
  } catch (err) {
    return res.status(401).json({success: false, message: "bad Requests"});
  }
};
