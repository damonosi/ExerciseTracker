import ExercitiiTotale from "@/models/ExercitiiTotale";
import ZiDeExercitii from "@/models/ZiDeExercitii";
import { cache } from "react";
import db from "./db";
export const GetAllDays = cache(async () => {
  await db.connect();
  const toateZilele = await ZiDeExercitii.find();
  db.disconnect();
  return toateZilele;
});

export const getTotalCount = cache(async () => {
  await db.connect();
  const totalCount = await ExercitiiTotale.findById("64b2562c3afec9a024494c9d");

  db.disconnect();
  return totalCount;
});
export const getTodayCount = cache(async (dataAzi: string) => {
  await db.connect();
  const todayCount = await ZiDeExercitii.findOne({ data: dataAzi });

  db.disconnect();
  return todayCount;
});
