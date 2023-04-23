import { useQuery } from '@tanstack/react-query';
import Game from '../entities/Game';
import APClient from '../services/api-client';

const apiClients = new APClient<Game>('/games');

const useGame = (slug: string) =>
	useQuery({
		queryKey: ['games', slug],
		queryFn: () => apiClients.get(slug),
	});

export default useGame;
