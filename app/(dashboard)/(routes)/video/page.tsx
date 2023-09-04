"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";
import { FileAudio } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
// import { Loader } from "@/components/loader";
// import { Empty } from "@/components/ui/empty";
import { useProModal } from "@/hooks/use-pro-modal";

const VideoPage = () => {
  return (
    <div>
      {" "}
      <Heading
        title="Video Generation"
        description="Turn your prompt into video."
        icon={FileAudio}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
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

export default VideoPage;
