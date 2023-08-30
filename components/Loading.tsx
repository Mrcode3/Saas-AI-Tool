import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image src="/logo.svg" alt="logo" fill />
      </div>
      <p className="text-sm text-muted-foreground">Imaginex is thinking...</p>
    </div>
  );
};

export default Loading;
