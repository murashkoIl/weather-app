export const renderHandler = (func, ...args) => {
	if (args.length) {
		return func.call(this, ...args);
	}
	return func();
};
