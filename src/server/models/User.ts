import mongoose from "mongoose";

export type UserType = {
  _id: string;
  email: string;
  fullname: string;
  password: string;
  type: string;
  profile_pic?: string;
};

const userSchema = new mongoose.Schema<UserType>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_pic: {
    type: String,
  },
  type: {
    type: String,
    default: "user",
  },
});

export default mongoose.model("User", userSchema);
