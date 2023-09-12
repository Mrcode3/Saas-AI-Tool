const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="h-full overflow-auto bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
			<div className="h-full max-w-screen-xl mx-auto">{children}</div>
		</main>
	);
};

export default LandingLayout;
