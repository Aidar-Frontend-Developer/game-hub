import { useQuery } from '@tanstack/react-query';
import APClient from '../services/api-client';
import { Game } from './useGames';

const apiClients = new APClient<Game>('/games');

const useGame = (slug: string) =>
	useQuery({
		queryKey: ['games', slug],
		queryFn: () => apiClients.get(slug),
	});

export default useGame;
