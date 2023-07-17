import ExercitiiTotale from "@/models/ExercitiiTotale";
import ZiDeExercitii from "@/models/ZiDeExercitii";
import { cache } from "react";
import db from "./db";
export const GetAllDays = cache(async () => {
  await db.connect();
  const toateZilele = await ZiDeExercitii.find();
  await db.disconnect();
  return toateZilele;
});

export const getTotalCount = cache(async () => {
  await db.connect();
  const totalCount = await ExercitiiTotale.findById("64b2562c3afec9a024494c9d");

  await db.disconnect();
  return totalCount;
});
export const getTodayCount = cache(async (dataAzi: string) => {
  await db.connect();

  let todayCount = await ZiDeExercitii.findOne({ data: dataAzi });
  if (!todayCount) {
    todayCount = new ZiDeExercitii({
      data: dataAzi,
      flotari: 0,
      abdomene: 0,
      sarituri: 0,
      gantere: 0,
    }).save();
    await db.disconnect();
    return todayCount;
  } else {
    await db.disconnect();
    return todayCount;
  }
});
