import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from "@/components/ModalProvider";
import { ToasterProvider } from "@/components/ToasterProvider";
import CrispPrivider from "@/components/CrispPrivider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Imaginex",
	description: "AI platform",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<CrispPrivider />
					<ToasterProvider />
					<ModalProvider />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
