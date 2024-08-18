import { Teacher } from "../models/teacherSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";
import bcrypt from "bcryptjs";

export const createTeacher = async (req, res, next) => {
  console.log(req.body);
  const { name, email, subject, password } = req.body;
  try {
    if (!name || !email || !subject || !password) {
      return handleValidationError("Please Fill Full Form!", 400);
    }
     
    // Check if the teacher already exists
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ success: false, message: "Teacher already exists!" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 12);

    await Teacher.create({ name, email, subject, password: hashedPassword });
    res.status(201).json({
      success: true,
      message: "Teacher Created!",
    }); 
  } catch (err) {
    next(err);
  }
};

export const getAllTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json({
      success: true,
      teachers,
    });   
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existTeacher = await Teacher.findOne({ email });
    if (!existTeacher) {
      return res.status(401).json({ success: false, message: "Email not found!" });
    }

    const isPasswordValid = await bcrypt.compare(password, existTeacher.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Password is incorrect!" });
    }

    res.status(200).json({
      success: true,
      message: "Successful signin",
      teacher: {
        id: existTeacher._id,
        name: existTeacher.name,
        email: existTeacher.email,
        subject: existTeacher.subject,
      },
    });
  } catch (err) {
    next(err);
  }
};
