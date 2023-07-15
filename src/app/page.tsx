import AdaugaExercitii from "@/components/AdaugaExercitii";
import ExercitiiTotaleComponent from "@/components/ExercitiiTotale";
import TotalAzi from "@/components/TotalAzi";
import ZileDeExzercitii from "@/components/ZileDeExercitii";

export const revalidate = 1;
export default async function Home() {
  return (
    <div className="flex flex-col mx-auto items-center gap-5 justify-center">
      <ExercitiiTotaleComponent />
      <div className="flex">
        <AdaugaExercitii />
        <TotalAzi />
      </div>
      <ZileDeExzercitii />
    </div>
  );
}
