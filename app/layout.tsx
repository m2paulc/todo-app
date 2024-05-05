import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | Dashboard",
		default: "Todo Dashboard",
	},
	description: "sample Todo app generated with Next.js",
	metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
