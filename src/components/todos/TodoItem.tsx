"use client";

import { TodoProps } from "@/types/types";

import styles from "./TodoItem.module.css";

const TodoItem = ({ id, title, isCompleted, toggleTodo }: TodoProps) => {
	return (
		<li className={styles.todo}>
			<label htmlFor={id} className={styles.label}>
				<input
					className={styles.checkbox}
					onChange={(e) => toggleTodo(id, e.target.checked)}
					id={id}
					defaultChecked={isCompleted}
					type="checkbox"
				/>
				<span className={styles.title}>{title}</span>
			</label>
		</li>
	);
};

export default TodoItem;
