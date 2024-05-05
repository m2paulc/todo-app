import TodoItem from "@/app/components/TodoItem";
import { getTodos } from "@/app/lib/data";
import Link from "next/link";

async function Page() {
	const todos = await getTodos();
	return (
		<>
			<header className="flex justify-between items-center mb-10">
				<h2 className="my-4 text-xl">Task List</h2>
				<Link
					href="/dashboard/customers"
					className="border border-slate-300 text-white-300 px-2 py-1 rounded hover:bg-sky-500 focus-within:bg-sky-500 outline-none"
				>
					New Task
				</Link>
			</header>
			<ul>
				{todos.map((todo) => (
					<TodoItem key={todo.id} {...todo} />
				))}
			</ul>
		</>
	);
}

export default Page;
