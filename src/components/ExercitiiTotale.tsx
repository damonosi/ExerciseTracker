import ExercitiiTotale from "@/models/ExercitiiTotale";
import db from "@/utils/db";

async function getData() {
  await db.connect();
  const data = await ExercitiiTotale.findById("64b2562c3afec9a024494c9d");

  await db.disconnect();
  return data;
}

const ExercitiiTotaleComponent = async () => {
  const data = await getData();
  const { flotariTotale, abdomeneTotale, sarituriTotale, gantereTotale } = data;
  return (
    <section className="flex flex-col items-center gap-7 border  border-black px-4 py-2">
      <h1>Exercitii facute in total</h1>
      <hr className="w-4/5 h-3 bg-black" />

      <div className="grid grid-cols-3 gap-5">
        <span>
          Exercitii totale{" "}
          {flotariTotale + abdomeneTotale + sarituriTotale + gantereTotale}
        </span>
        <span>Flotari totale {flotariTotale}</span>
        <span>Abdomene totale {abdomeneTotale}</span>
        <span>Sarituri totale {sarituriTotale}</span>
        <span>Gantere totale {gantereTotale}</span>
      </div>
    </section>
  );
};

export default ExercitiiTotaleComponent;
