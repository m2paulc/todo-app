import { createTodo } from "@/app/lib/data";
import Link from "next/link";

function Page() {
	return (
		<>
			<header className="flex justify-between items-center">
				<h2 className="text-2xl">New Task</h2>
			</header>
			<form action={createTodo} className="flex flex-col gap-2">
				<input
					type="text"
					name="task"
					placeholder="New Task"
					className="border border-sky-200 rounded-md px-2 py-1 outline-none focus:border-sky-200 text-black"
				/>
				<div className="flex justify-end gap-4">
					<button
						type="submit"
						className="border border-slate-300 text-white-300 px-2 py-1 rounded hover:bg-sky-500 focus-within:bg-sky-500 outline-none"
					>
						Submit
					</button>
					<Link
						href="..."
						className="border border-slate-300 text-white-300 px-2 py-1 rounded hover:bg-sky-500 focus-within:bg-sky-500 outline-none"
					>
						Cancel
					</Link>
				</div>
			</form>
		</>
	);
}

export default Page;
