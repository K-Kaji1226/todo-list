import { toggleTodo } from "@/actions/actions";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
import { prisma } from "@/libs/prismadb";

const getTodos = () => {
	return prisma.todo.findMany();
};

const TodoList = async () => {
	const todos = await getTodos();

	return (
		<div className={styles.list}>
			<ul>
				{todos.map((todo) => {
					return <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />;
				})}
			</ul>
		</div>
	);
};

export default TodoList;
