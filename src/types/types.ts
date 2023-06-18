export type TodoProps = {
	id: string;
	title: string;
	isCompleted: boolean;
	toggleTodo: (id: string, complete: boolean) => void;
};
