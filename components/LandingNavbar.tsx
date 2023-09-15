"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

const LandingNavbar = () => {
	const { isSignedIn } = useAuth();

	return (
		<nav className="flex items-center justify-between p-4 rounded-sm ">
			<Link href="/" className="flex items-center">
				<div className="relative w-8 h-8 mr-4 ">
					<Image src="/logo.png" alt="Logo" width={45} height={45} />
				</div>
				<h1 className={cn("text-2xl font-bold text-white", font.className)}>
					Imaginex
				</h1>
			</Link>
			<div>
				<Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
					<Button variant={"outline"} className="rounded-full">
						Get Started
					</Button>
				</Link>
			</div>
		</nav>
	);
};

export default LandingNavbar;
