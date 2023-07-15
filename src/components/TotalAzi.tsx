import getTodayDate from "@/utils/GetDateToday";
import { getTodayCount } from "@/utils/getData";

const TotalAzi = async () => {
  const dataAzi = getTodayDate();
  const today = await getTodayCount(dataAzi);
  const { flotari, abdomene, gantere, sarituri } = today;
  return (
    <div className="flex flex-col items-start justify-between pb-2 gap-5 px-4 border border-black">
      <h1 className="border-b-2 py-2 px-4 rounded-b-xl border-black border-l-2 border-r-2">
        Exercitii facute azi
      </h1>
      <span className="flex justify-between w-full">
        <p>flotari</p>
        <p>-</p>
        <p>{flotari}</p>
      </span>
      <span className="flex justify-between w-full">
        {" "}
        <p>abdomene</p>
        <p>-</p>
        <p>{abdomene}</p>
      </span>
      <span className="flex justify-between w-full">
        {" "}
        <p>sarituri</p>
        <p>-</p>
        <p>{sarituri}</p>
      </span>
      <span className="flex justify-between w-full">
        {" "}
        <p>gantere</p>
        <p>-</p>
        <p>{gantere}</p>
      </span>

      <span className="flex justify-between w-full border-black border-t-2 pt-2">
        {" "}
        <p>total</p>
        <p>-</p>
        <p>{sarituri + flotari + abdomene + gantere}</p>
      </span>
    </div>
  );
};

export default TotalAzi;
