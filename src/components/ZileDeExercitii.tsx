import ZiDeExercitii from "@/models/ZiDeExercitii";
import db from "@/utils/db";

async function GetAllDays() {
  await db.connect();
  const toateZilele = await ZiDeExercitii.find();
  await db.disconnect();
  return toateZilele;
}

const ZileDeExzercitii = async () => {
  const toateZilele = await GetAllDays();

  return (
    <div className="border border-black flex w-full px-4 gap-4 items-center py-2">
      {toateZilele.map(({ data, flotari, abdomene, sarituri, gantere }) => (
        <div
          className="flex flex-col"
          key={data}
        >
          <h1>{data}</h1>
          <span>Flotari - {flotari}</span>
          <span>Abdomene - {abdomene}</span>
          <span>Sarituri - {sarituri}</span>
          <span>Gantere - {gantere}</span>
        </div>
      ))}
    </div>
  );
};

export default ZileDeExzercitii;
