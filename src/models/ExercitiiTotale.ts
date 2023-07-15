import mongoose from "mongoose";

const exercitiiTotaleSchema = new mongoose.Schema(
  {
    zileExercitii: { type: Number },
    flotariTotale: { type: Number },
    abdomeneTotale: { type: Number },
    sarituriTotale: { type: Number },
    gantereTotale: { type: Number },
  },
  {
    timestamps: true,
  },
);

const ExercitiiTotale =
  mongoose.models.ExercitiiTotale ||
  mongoose.model("ExercitiiTotale", exercitiiTotaleSchema);
export default ExercitiiTotale;
