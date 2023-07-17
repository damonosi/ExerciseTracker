import ExercitiiTotale from "@/models/ExercitiiTotale";
import ZiDeExercitii from "@/models/ZiDeExercitii";

import db from "@/utils/db";
import { NextResponse } from "next/server";
interface RequestBody {
  nrSarituri: number;
  dataAzi: string;
}

async function updateTotalSarituri(nrSarituri: number) {
  const filtruTotale = { _id: "64b2562c3afec9a024494c9d" };
  return await ExercitiiTotale.updateOne(filtruTotale, {
    $inc: { sarituriTotale: nrSarituri },
  });
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { nrSarituri, dataAzi } = body;
  if (!nrSarituri) {
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
      await updateTotalSarituri(nrSarituri);
      const azi = await ZiDeExercitii.findOne(filter);
      if (!azi) {
        const ziNoua = new ZiDeExercitii({
          data: dataAzi,
          sarituri: nrSarituri,
        });
        await ziNoua.save();

        db.disconnect();
        return new Response(JSON.stringify("zi noua creata"));
      } else {
        ZiDeExercitii.updateOne(filter, {
          $inc: { sarituri: nrSarituri },
        });

        db.disconnect();
        return new Response(JSON.stringify("sarituri updatate"));
      }
}
