"use client";

import { useAuth } from "@clerk/nextjs";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";
import Link from "next/link";

const LandingHero = () => {
	const { isSignedIn } = useAuth();
	return (
		<div className="py-16 space-y-1 font-bold text-center text-white">
			<div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
				<h1>The best AI tool for</h1>
				<div className="text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-100 to-gray-900">
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

			<p className="text-sm font-light md:text-xl text-zinc-400">
				Creat content.Using AI 10x faster.
			</p>
			<Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
				<Button
					variant="premium"
					className="p-4 mt-4 font-semibold rounded-full md:text-lg md:p-6"
				>
					Start Generating For Free
				</Button>
			</Link>
			<p className="text-xs font-normal text-zinc-400 md:text-sm">
				No credit card required.
			</p>
		</div>
	);
};

export default LandingHero;
