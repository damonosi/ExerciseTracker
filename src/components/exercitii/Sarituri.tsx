"use client";

import getError from "@/utils/getError";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  ButonValidare,
  ContainerButoane,
  ContainerExercitiu,
} from "./ContainereExercitiu";
const Sarituri = ({ dataAzi }: { dataAzi: string }) => {
  const [nrSarituri, setNrSarituri] = useState(0);

  const router = useRouter();
  async function handleClick() {
    try {
      await axios.post("/api/add-sarituri", { nrSarituri, dataAzi });
      toast.success("Sarituri adaugate");
      setNrSarituri(0);
      router.refresh();
    } catch (err) {
      toast.error(getError(err));
    }
  }
  return (
    <ContainerExercitiu className=" border-b-2 ">
      <h2 className="w-28">Sarituri</h2>
      <ContainerButoane>
        <button onClick={() => setNrSarituri(nrSarituri - 5)}>-</button>
        <span className="min-w-[25px] flex items-center justify-center">
          {nrSarituri}
        </span>
        <button onClick={() => setNrSarituri(nrSarituri + 5)}>+</button>
      </ContainerButoane>
      <ButonValidare onClick={handleClick} />
    </ContainerExercitiu>
  );
};

export default Sarituri;
