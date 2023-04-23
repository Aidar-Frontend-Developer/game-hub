import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
	count: number;
	results: T[];
	next: string | null;
}

const axiosInstance = axios.create({
	baseURL: 'https://rawg.io/api/',
	params: {
		key: 'c542e67aec3a4340908f9de9e86038af',
	},
});

class APClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) => {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
	};

	get = (id: number | string) => {
		return axiosInstance
			.get<T>(this.endpoint + '/' + id)
			.then((res) => res.data);
	};
}

export default APClient;
