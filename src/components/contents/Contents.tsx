import Create from "../create/Create";
import Header from "../header/Header";
import TodoList from "../todos/TodoList";
import styles from "./Contents.module.css";

const Contents: React.FC = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Create />
			<TodoList />
		</div>
	);
};

export default Contents;
