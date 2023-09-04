"use-client";

import { useEffect } from "react";

import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4bf4fd41-75c7-4475-8f63-6a8c315d28eb");
  }, []);

  return null;
};

export default CrispChat;
