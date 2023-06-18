"use client";
import { useRef } from "react";
import styles from "./Create.module.css";
import { createTodo } from "@/actions/actions";

const Create = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const create = async (data: FormData) => {
		await createTodo(data);
		if (formRef.current) formRef.current.reset();
	};

	return (
		<form action={create} className={styles.form} ref={formRef}>
			<div className={styles.inner}>
				<span className={styles.circle} />
				<input
					className={styles.input}
					name="title"
					type="text"
					placeholder="Create new todo ..."
				/>
			</div>
		</form>
	);
};

export default Create;
