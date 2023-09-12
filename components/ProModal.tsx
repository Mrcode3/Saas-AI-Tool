"use client";

import { useProModal } from "@/hooks/use-pro-modal";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "./ui/dialog";
import {
	Code,
	ImageIcon,
	MessageSquare,
	Music,
	VideoIcon,
	ArrowRight,
	Check,
	Zap,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const tools = [
	{
		label: "Conversation",
		icon: MessageSquare,
		color: "text-violet-500",
	},
	{
		label: "Image Generation",
		icon: ImageIcon,
		color: "text-pink-700",
	},
	{
		label: "Video Generation",
		icon: VideoIcon,
		color: "text-orange-700",
	},
	{
		label: "Music Generation",
		icon: Music,
		color: "text-emerald-500",
	},
	{
		label: "Code Generation",
		icon: Code,
		color: "text-green-700",
	},
];

const ProModal = () => {
	const proModal = useProModal();

	const [loading, setLoading] = useState(false);

	const onSubscribe = async () => {
		try {
			setLoading(true);
			const response = await axios.get("/api/stripe");
			window.location.href = response.data.url;
		} catch (error) {
			toast.error("Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="flex flex-col items-center justify-center pb-2 gap-y-4">
						<div className="flex items-center py-1 font-bold gap-x-2">
							Upgrade to
							<Badge variant="premium" className="py-1 text-sm uppercase">
								pro
							</Badge>
						</div>
					</DialogTitle>
					<DialogDescription className="pt-2 space-y-2 font-medium text-center text-zinc-900">
						{tools.map((tool) => (
							<Card
								key={tool.label}
								className="flex items-center justify-between p-3 border-black/5"
							>
								<div className="flex items-center gap-x-4">
									<div className="p-2 rounded-md w-fit">
										<tool.icon className={cn("w-6 h-6", tool.color)} />
									</div>
									<p className="text-sm font-semibold">{tool.label}</p>
								</div>
								<Check className="w-5 text-primary aspect-square" />
							</Card>
						))}
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button
						disabled={loading}
						size="lg"
						variant="premium"
						className="w-full text-white"
						onClick={onSubscribe}
					>
						Upgrade
						<Zap className="w-4 ml-2 aspect-square fill-white" />
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default ProModal;
