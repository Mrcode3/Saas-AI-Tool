import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayot = async ({ children }: { children: React.ReactNode }) => {
	const apiLimitCount = await getApiLimitCount();
	const isPro = await checkSubscription();

	return (
		<div className="relative h-full bg-gradient-to-b from-rose-100 to-teal-100">
			<div className="hidden h-full bg-gray-900 md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
				<Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
			</div>
			<main className="pb-10 md:pl-72">
				<Navbar />

				{children}
			</main>
		</div>
	);
};

export default DashboardLayot;
