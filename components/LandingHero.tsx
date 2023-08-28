"use client";

import { useAuth } from "@clerk/nextjs";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";
import Link from "next/link";

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The best AI tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <Typewriter
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Blog Writing.",
                "Mail Writing.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <p className="text-sm md:text-xl font-light text-zinc-400">
        Creat content.Using AI 10x faster.
      </p>
      <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
        <Button
          variant="premium"
          className="md:text-lg p-4 md:p-6 rounded-full font-semibold mt-4"
        >
          Start Generating For Free
        </Button>
      </Link>
      <p className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </p>
    </div>
  );
};

export default LandingHero;
