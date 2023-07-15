import Data from "@/models/ExercitiiTotale";
import db from "@/utils/db";
import { NextResponse } from "next/server";
interface RequestBody {
  addZi: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { addZi } = body;
  if (!addZi) {
    return NextResponse.json(
      {
        message: "Validation error",
      },
      {
        status: 422,
      },
    );
  }
  const filter = { _id: "64b16b8b27a024c134f41762" };

  await db.connect();
  const data = await Data.updateOne(filter, {
    $inc: { zileExercitii: addZi },
  });
  await db.disconnect();
  return new Response(JSON.stringify(data));
}
