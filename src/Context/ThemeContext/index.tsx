import React, {
	createContext,
	useState,
	useEffect,
	FC,
	useContext,
} from "react";

export const ThemeContext = createContext({ theme: "light" });
export const ThemeDispatcherContext = createContext({ toggleTheme: () => {} });

export const ThemeProvider: FC<{}> = ({ children }) => {
	const [theme, setTheme] = useState("light");

	function toggleTheme() {
		const nextTheme = theme === "dark" ? "light" : "dark";
		setTheme(nextTheme);

		localStorage.setItem("theme", nextTheme);
	}

	useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		if (localTheme) {
			setTheme(localTheme);
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ theme }}>
			<ThemeDispatcherContext.Provider value={{ toggleTheme }}>
				{children}
			</ThemeDispatcherContext.Provider>
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => {
	return useContext(ThemeContext);
};

export const useThemeDispatcherContext = () => {
	return useContext(ThemeDispatcherContext);
};
