import axios from 'axios';

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

export default axios.create({
	baseURL: 'https://rawg.io/api/',
	params: {
		key: 'c542e67aec3a4340908f9de9e86038af',
	},
});
