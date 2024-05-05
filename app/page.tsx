import Image from "next/image";
import { Metadata } from "next";
import { LightBulbIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
	title: "Todo",
};

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col p-6">
			<div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
				<LightBulbIcon className="w-24" />
			</div>
			<div className="mt-4 flex grow flex-col gap-4 md:flex-row">
				<div className="flex flex-col justify-center gap-6 rounded-lg bg-slate-900 px-6 py-10 md:w-2/5 md:px-20">
					<div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
					<p className="text-xl md:text-3xl md:leading-normal">
						<strong>Welcome to your Todo App</strong>
					</p>
				</div>
				<div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
					{/* Add Hero Images Here */}
					<Image
						src="/hero-desktop.png"
						width={1811}
						height={1983}
						className="hidden md:block"
						alt="Screenshots of the dashboard project showing desktop version"
					/>
					<Image
						src="/hero-mobile.png"
						width={560}
						height={620}
						className="block md:hidden"
						alt="Screenshot of the dashboard project showing mobile version"
					/>
				</div>
			</div>
		</main>
	);
}
