import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Hoofdpagina from "../components/Hoofdpagina";

const KapperSelecteren: NextPage = () => {
  const [hairdressers, setHairdressers] = useState();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/hairdressers"
      );

      setHairdressers(await res.json());
    }
    fetchData();
  }, []);

  return (
    <>
      <Hoofdpagina hairdressers={hairdressers!} />
    </>
  );
};

export default KapperSelecteren;
