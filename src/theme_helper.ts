export function setTheme(theme: "light" | "dark"){
	localStorage.setItem("theme",theme);
	document.documentElement.setAttribute("data-bs-theme",theme);
}

export function getTheme(){
	const theme = localStorage.getItem("theme");
	if(theme && (theme === "light" || theme === "dark")) return theme;

	const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
	if (prefersDarkTheme.matches) {
		return 'dark';
	}

	const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)');
	if (prefersLightTheme.matches) {
		return 'light';
	}

	return 'dark';
}

export function initTheme(){
	setTheme(getTheme());
}