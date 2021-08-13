const choice = (items) => {
	return items[Math.floor(Math.random() * items.length)];
};

const remove = (items, item) => {
	const ind = items.findIndex((i) => i === item);
	items.splice(ind, 1);
	return ind;
};

export { choice, remove };
