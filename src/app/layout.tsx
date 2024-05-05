import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nextjs Tutorial",
	description: "next js tutorial",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="bg-teal-400 text-black top-0 sticky p-5">
					header section
				</div>

				{children}

				<div className="bottom-0 sticky p-5 bg-yellow-600">footer section</div>
			</body>
		</html>
	);
}
