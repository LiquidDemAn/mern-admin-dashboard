import { TokensType } from './typedef';

export const reverseTokens = (tokens: TokensType): TokensType => {
	const reversedTokens = {} as any;

	Object.entries(tokens).forEach(([key, val]) => {
		const keys = Object.keys(val);
		const values = Object.values(val);
		const length = keys.length;
		const reversedObj = {} as any;

		for (let i = 0; i < length; i++) {
			reversedObj[keys[i]] = values[length - i - 1];
		}
		reversedTokens[key] = reversedObj;
	});
	return reversedTokens;
};
