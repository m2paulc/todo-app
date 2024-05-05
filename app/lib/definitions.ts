export type TodoTypes = {
	id: string;
	task: string;
	completed: boolean;
	createdAt: Date;
	updatedAt: Date;
	toggleTodo: (id: string, completed: boolean) => void;
};
