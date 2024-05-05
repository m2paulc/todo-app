import prisma from "@/db";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getTodos() {
	noStore();
	try {
		console.log("Fetching todos...");
		const todos = await prisma.todo.findMany();
		return todos;
	} catch (error) {
		console.error(error);
		throw new Error("Failed to fetch todos");
	}
}

export async function createTodo(data: FormData) {
	"use server";
	noStore();
	try {
		const task = data.get("task")?.valueOf();
		if (typeof task !== "string" || task.length === 0) {
			throw new Error("Invalid task");
		}
		console.log("Creating todo...");
		const todo = await prisma.todo.create({
			data: {
				task,
			},
		});
	} catch (error) {
		console.error(error);
		throw new Error("Failed to create todo");
	}
	redirect("/dashboard/task");
}

export async function toggleTodo(id: string, completed: boolean) {
	"use server";
	noStore();
	try {
		console.log("Toggle Task...");
		await prisma.todo.update({ where: { id }, data: { completed } });
	} catch (error) {
		console.error(error);
		throw new Error("Toggle Task not completed.");
	}
	revalidatePath("/dashboard/task");
}
