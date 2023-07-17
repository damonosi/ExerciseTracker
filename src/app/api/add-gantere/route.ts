import ExercitiiTotale from "@/models/ExercitiiTotale";
import ZiDeExercitii from "@/models/ZiDeExercitii";

import db from "@/utils/db";
import { NextResponse } from "next/server";
interface RequestBody {
  nrRidicari: number;
  dataAzi: string;
}

async function updateTotalRidicari(nrRidicari: number) {
  const filtruTotale = { _id: "64b2562c3afec9a024494c9d" };
  return await ExercitiiTotale.updateOne(filtruTotale, {
    $inc: { gantereTotale: nrRidicari },
  });
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { nrRidicari, dataAzi } = body;
  if (!nrRidicari) {
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
      await updateTotalRidicari(nrRidicari);
      const azi = await ZiDeExercitii.findOne(filter);
      if (!azi) {
        const ziNoua = new ZiDeExercitii({
          data: dataAzi,
          gantere: nrRidicari,
        });
        await ziNoua.save();

        db.disconnect();
        return new Response(JSON.stringify("zi noua creata"));
      } else {
        await ZiDeExercitii.updateOne(filter, {
          $inc: { gantere: nrRidicari },
        });

        db.disconnect();
        return new Response(JSON.stringify("gantere updatate"));
      }
}
