export const initializeLocalStorageData = () => {
	if (localStorage.getItem('storage') === null) {
		localStorage.setItem(
			'storage',
			JSON.stringify({
				isDarkTheme: true,
				isCelcius: true,
				isKPH: true,
				editMode: false,
				cards: [],
			})
		);
	}
};

export const getLocalStorageData = () => {
	return JSON.parse(window.localStorage.getItem('storage'));
};

export const saveLocalStorageData = obj => {
	window.localStorage.setItem('storage', JSON.stringify(obj));
};
