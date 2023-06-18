"use client";
import IconMoon from "assets/icon-moon.svg";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
	return (
		<div className={styles.header}>
			<h1 className={styles.title}>Todo</h1>
			<Image src={IconMoon} width={20} height={20} alt="Change Dark Theme" />
		</div>
	);
};

export default Header;
