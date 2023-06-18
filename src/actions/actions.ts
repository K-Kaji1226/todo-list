"use server";

import { prisma } from "@/libs/prismadb";
import { revalidatePath } from "next/cache";

export const createTodo = async (data: FormData) => {
	const title = data.get("title")?.valueOf();

	if (typeof title !== "string" || title.length === 0) {
		throw new Error("Invalid Todo");
	}

	await prisma.todo.create({ data: { title, isCompleted: false } });

	revalidatePath("/");
};

export const toggleTodo = async (id: string, isCompleted: boolean) => {
	await prisma.todo.update({ where: { id }, data: { isCompleted } });
	console.log(id, isCompleted);
};
