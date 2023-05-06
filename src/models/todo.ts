import { Schema, model } from "mongoose";

export const TodoSchema = new Schema({
  task: String,
  isCompleted: Boolean,
});

export default model("Todo", TodoSchema);
