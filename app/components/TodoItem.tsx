import { TodoTypes } from "../lib/definitions";

export default function TodoItem({ id, task, completed }: TodoTypes) {
	return (
		<li key={id} className="flex items-center space-x-3">
			<input
				id={id}
				type="checkbox"
				className="w-4 h-4 cursor-pointer peer"
				// checked={completed}
			/>
			<label
				htmlFor={id}
				className="peer-checked:line-through peer-checked:text-slate-500 cursor-pointer"
			>
				<span className="text-sm">{task}</span>
			</label>
		</li>
	);
}
