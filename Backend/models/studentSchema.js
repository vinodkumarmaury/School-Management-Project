import mongoose from "mongoose";
import validator from "validator";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true
  },
  grade: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email format'
    }
  }
});


export const Student = mongoose.model('Student', studentSchema);



