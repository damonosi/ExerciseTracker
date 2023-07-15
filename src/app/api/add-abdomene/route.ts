import ExercitiiTotale from "@/models/ExercitiiTotale";
import ZiDeExercitii from "@/models/ZiDeExercitii";
import db from "@/utils/db";

import { NextResponse } from "next/server";
interface RequestBody {
  nrAbdomene: number;
  dataAzi: string;
}

async function updateTotalAbdomene(nrAbdomene: number) {
  const filtruTotale = { _id: "64b2562c3afec9a024494c9d" };
  return await ExercitiiTotale.updateOne(filtruTotale, {
    $inc: { abdomeneTotale: nrAbdomene },
  });
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { nrAbdomene, dataAzi } = body;
  if (!nrAbdomene) {
    return NextResponse.json(
      {
        message: "Nu ai adaugat nr abdomene",
      },
      {
        status: 422,
      },
    );
  }
  const filter = { data: dataAzi };

  await db.connect();
  const azi = await ZiDeExercitii.findOne(filter);
  if (!azi) {
    const ziNoua = new ZiDeExercitii({
      data: dataAzi,
      abdomene: nrAbdomene,
    });
    await ziNoua.save();

    await updateTotalAbdomene(nrAbdomene);

     db.disconnect();
    return NextResponse.json("new day");
  } else {
    await ZiDeExercitii.updateOne(filter, {
      $inc: { abdomene: nrAbdomene },
    });
    await updateTotalAbdomene(nrAbdomene);

     db.disconnect();
    return NextResponse.json("updated day");
  }
}
