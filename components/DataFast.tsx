"use client";

import { useEffect } from "react";
import { initDataFast } from "datafast";

export function DataFast() {
  useEffect(() => {
    initDataFast({
      websiteId: "dfid_Nc0jpX0RiMgflrx2oEO1G",
    });
  }, []);

  return null;
}
