import mongoose from "mongoose";

const ziDeExercitiiSchema = new mongoose.Schema(
  {
    data: { type: String, unique: true },
    zileExercitii: { type: Number },
    flotari: { type: Number },
    abdomene: { type: Number },
    sarituri: { type: Number },
    gantere: { type: Number },
  },
  {
    timestamps: true,
  },
);

const ZiDeExercitii =
  mongoose.models.ZiDeExercitii ||
  mongoose.model("ZiDeExercitii", ziDeExercitiiSchema);
export default ZiDeExercitii;
