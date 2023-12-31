import LandingExamples from "@/components/LandingExamples";
import LandingHero from "@/components/LandingHero";
import LandingNavbar from "@/components/LandingNavbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const dashboradPage = () => {
	return (
		<div className="h-full">
			<LandingNavbar />
			<LandingHero />
			<LandingExamples />
		</div>
	);
};

export default dashboradPage;
