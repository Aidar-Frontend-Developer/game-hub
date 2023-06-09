import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameStore from '../store';

const GenreList = () => {
	const { data: genres, isLoading, error } = useGenres();
	const selectedGenreId = useGameStore((s) => s.gameQuery.genreId);
	const setSelectedGenreId = useGameStore((s) => s.setGenreId);
	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading fontSize="2xl" marginTop={9} marginBottom={3}>
				Genres
			</Heading>
			<List>
				{genres?.results.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								objectFit="cover"
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								whiteSpace="normal"
								textAlign="left"
								fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
								onClick={() => setSelectedGenreId(genre.id)}
								fontSize="md"
								variant="link"
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
