"use client";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Music, Send } from "lucide-react";
import Image from "next/image";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
// import { Loader } from "@/components/Loader";
// import { Empty } from "@/components/ui/Empty";
import { useProModal } from "@/hooks/use-pro-modal";
const MusicPage = () => {
  return (
    <div>
      <Heading
        title="Music"
        description="Turn your prompt into music"
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />
      <div>
        <div className=" p-20 flex flex-col items-center justify-center">
          <div className="relative h-52 w-52">
            <Image
              alt="Comming soon"
              src="/comming_soon.svg"
              fill
              className="element-to-animate"
            />
          </div>
          <p className="text-muted-foreground text-sm  text-center">
            Comming Soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
