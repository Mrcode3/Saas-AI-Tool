"use client";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import {
	Code,
	ImageIcon,
	LayoutDashboard,
	MessageSquare,
	Music,
	Settings,
	VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FreeCounter from "./FreeCounter";

const monsterrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
	{
		label: "Dashboard",
		icon: LayoutDashboard,
		href: "/dashboard",
		color: "text-sky-500",
	},
	{
		label: "Conversation",
		icon: MessageSquare,
		href: "/conversation",
		color: "text-violet-500",
	},
	{
		label: "Image Generation",
		icon: ImageIcon,
		color: "text-pink-700",
		href: "/image",
	},
	{
		label: "Video Generation",
		icon: VideoIcon,
		color: "text-orange-700",
		href: "/video",
	},
	{
		label: "Music Generation",
		icon: Music,
		color: "text-emerald-500",
		href: "/music",
	},
	{
		label: "Code Generation",
		icon: Code,
		color: "text-green-700",
		href: "/code",
	},
	{
		label: "Settings",
		icon: Settings,
		href: "/settings",
	},
];

interface SidebarProps {
	apiLimitCount: number;
	isPro: boolean;
}

const Sidebar = ({ apiLimitCount = 0, isPro = false }: SidebarProps) => {
	const pathname = usePathname();
	return (
		<div className="flex flex-col h-full py-4 space-y-4 text-white bg-gradient-to-b from-gray-700 via-gray-900 to-black">
			<div className="flex-1 px-3 py-2">
				<Link href={"/dashboard "} className="flex items-center pl-3 mb-14">
					<div className="relative w-8 h-8 mr-4">
						<Image alt="logo" src="/logo.png" width={45} height={45} />
					</div>
					<h1 className={cn("text-2xl font-bold", monsterrat.className)}>
						Imaginex
					</h1>
				</Link>
				<div className="space-y-1">
					{routes.map((route) => {
						return (
							<Link
								href={route.href}
								key={route.href}
								className={cn(
									"text-sm flex p-3 w-full justify-start font-medium cursor-pointer hover:text-pink-600 hover:bg-white/10 rounded-lg transition-all",
									pathname === route.href
										? "text-pink-600 bg-white/10"
										: "text-zinc-400"
								)}
							>
								<div className="flex items-center flex-1">
									<route.icon className={cn("h-5 w-5 mr-3", route.color)} />
									{route.label}
								</div>
							</Link>
						);
					})}
				</div>
			</div>
			<FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
		</div>
	);
};

export default Sidebar;
