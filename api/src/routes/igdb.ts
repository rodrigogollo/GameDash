import express, { Request, Response, Router } from 'express';
import axios from 'axios';
import { GameData } from '../../../types/igdb';
import dotenv from 'dotenv';
dotenv.config();

const { IGDB_CLIENT_ID, IGDB_AUTH } = process.env;

const router: Router = express.Router();

const headers = {
  'Client-ID': IGDB_CLIENT_ID,
  Authorization: IGDB_AUTH,
  Accept: 'application/json'
};

router.get('/', async (req: Request, res: Response) => {
  const games = await axios.post<GameData[]>('https://api.igdb.com/v4/games',  `fields age_ratings,
    aggregated_rating,
    aggregated_rating_count,
    alternative_names,
    artworks,bundles,
    category,checksum,
    collection,
    cover,
    created_at,
    dlcs,
    expansions,
    external_games,
    first_release_date,
    follows,
    franchise,
    franchises,
    game_engines,
    game_modes,
    genres,
    hypes,
    involved_companies,
    keywords,
    multiplayer_modes,
    name,
    parent_game,
    platforms,
    player_perspectives,
    rating,
    rating_count,
    release_dates,
    screenshots,
    similar_games,
    slug,
    standalone_expansions,
    status,
    storyline,
    summary,
    tags,
    themes,
    total_rating,
    total_rating_count,
    updated_at,
    url,
    version_parent,
    version_title,
    videos,
    websites;
    
    l 50;
    `,
  { headers });

  res.send(games.data);
});

router.get('/cover/:id', async (req: Request, res: Response) => {
  const covers = await axios.post('https://api.igdb.com/v4/covers',
    `fields alpha_channel,animated,checksum,game,game_localization,height,image_id,url,width; 
  where id = ${req.params.id};`, { headers });

  res.send(covers.data);
});

export default router;