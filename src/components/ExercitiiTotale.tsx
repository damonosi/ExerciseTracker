import { getTotalCount } from "@/utils/getData";

const ExercitiiTotaleComponent = async () => {
  const data = await getTotalCount();
  const { flotariTotale, abdomeneTotale, sarituriTotale, gantereTotale } = data;
  return (
    <section className="flex flex-col items-center gap-7 border  border-black px-4 py-2">
      <h1>Exercitii facute in total</h1>
      <hr className="w-4/5 h-3 bg-black" />

      <div className="grid grid-cols-3 gap-5">
        <span>
          Exercitii{" "}
          {flotariTotale + abdomeneTotale + sarituriTotale + gantereTotale}
        </span>
        <span>Flotari {flotariTotale}</span>
        <span>Abdomene {abdomeneTotale}</span>
        <span>Sarituri {sarituriTotale}</span>
        <span>Gantere {gantereTotale}</span>
      </div>
    </section>
  );
};

export default ExercitiiTotaleComponent;
