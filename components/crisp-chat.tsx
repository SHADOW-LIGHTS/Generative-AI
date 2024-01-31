"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("ef077cdf-cd8c-4724-92d8-e642056f791c");
  }, []);

  return null;
};
