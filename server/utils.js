// formatted sort should look like {userId: -1}
export const generateSort = (sort) => {
	const sortParsed = JSON.parse(sort);
	const sortFormatted = sortParsed
		? {
				[sortParsed.field]: sortParsed.sort === 'asc' ? 1 : -1,
		  }
		: {};

	return sortFormatted;
};
