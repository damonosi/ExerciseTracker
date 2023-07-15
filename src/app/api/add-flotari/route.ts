import ExercitiiTotale from "@/models/ExercitiiTotale";
import ZiDeExercitii from "@/models/ZiDeExercitii";

import db from "@/utils/db";
import { NextResponse } from "next/server";
interface RequestBody {
  nrFlotari: number;
  dataAzi: string;
}

async function updateTotalFlotari(nrFlotari: number) {
  const filtruTotale = { _id: "64b2562c3afec9a024494c9d" };
  return await ExercitiiTotale.updateOne(filtruTotale, {
    $inc: { flotariTotale: nrFlotari },
  });
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { nrFlotari, dataAzi } = body;
  if (!nrFlotari) {
    return NextResponse.json(
      {
        message: "Validation error",
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
      flotari: nrFlotari,
    });
    await ziNoua.save();

    await updateTotalFlotari(nrFlotari);
     db.disconnect();
    return new Response(JSON.stringify("zi noua creata"));
  } else {
    const updateDay = await ZiDeExercitii.updateOne(filter, {
      $inc: { flotari: nrFlotari },
    });
    await updateTotalFlotari(nrFlotari);
     db.disconnect();
    return new Response(JSON.stringify(updateDay));
  }
}
