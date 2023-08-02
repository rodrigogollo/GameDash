import { useEffect, useState } from 'react';
import { GameData } from '../../../../types/igdb';

function Home() {

	const [games, setGames] = useState<GameData[] | []>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const fetchGamesData = async () => {
		const gamesDataJSON: string | null = localStorage.getItem('gamesData');
		const gamesData: GameData[] = gamesDataJSON !== null ? JSON.parse(gamesDataJSON) : [];
		if(gamesData.length === 0) {
			setLoading(true);
			const response = await fetch(`${process.env.REACT_APP_API_URL}/igdb`);
			console.log(response);
			const data: GameData[] = await response.json();
			localStorage.setItem('gamesData', JSON.stringify(data));
			setGames(data);
			setLoading(false);
		} else {
			setGames(gamesData);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchGamesData();
	}, []);

	return (
		<>
			<div id="games">
				<h1>IGDB Games</h1>
				{
					loading
						? <p>Loading...</p>
						: games.map(game => (
							<div key={game.id}>
								<p key={game.id+'_id'}>{game.id}</p>
								<p key={game.id+'_name'}>{game.name}</p>
							</div>
						)
						)
				}
			</div>
		</>
	);
}

export default Home;