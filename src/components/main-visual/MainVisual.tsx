import Image from "next/image";
import MainVisualImage from "assets/bg-mobile-light.jpg";
import styles from "./MainVisual.module.css";

const MainVisual: React.FC = () => {
	return (
		<div className={styles.container}>
			<Image src={MainVisualImage} fill alt="main visual" />
		</div>
	);
};

export default MainVisual;
