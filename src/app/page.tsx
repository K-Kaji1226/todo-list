import Contents from "@/components/contents/Contents";
import styles from "./page.module.css";
import MainVisual from "@/components/main-visual/MainVisual";

const Home = async () => {
	// const todos = await prisma.todo.findMany();
	return (
		<main className="container">
			<MainVisual />
			<Contents />
		</main>
	);
};

export default Home;
