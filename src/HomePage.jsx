import React from 'react';
import { Store } from './store';
import './index.css';
import NavBar from './NavBar';
const EpisodeList  = React.lazy(() => import('./EpisodeList'));


export default function HomePage () {

const { state, dispatch } = React.useContext(Store);

console.log('Homepage: ', state);

const fetchDataAction = async (queryString) => {
 if(!queryString) queryString = 'Rick&morty';
 const data = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${queryString}y&embed=episodes`);
 const dataJSON = await data.json();
 return dispatch({
   type: 'FETCH_DATA',
   payload: dataJSON._embedded.episodes
 });
};

const toggleFavAction = episode => {
 const episodeInFavs = state.favorites.includes(episode);
 let dispatchObj = {
   type: 'FAV_ADD',
   payload: episode
 }
 if (episodeInFavs) {
   const favoritesWithoutEpisode = state.favorites.filter( fav => fav.id !== episode.id);
   dispatchObj = {
     type: 'REMOVE_FAV',
     payload: favoritesWithoutEpisode
   }
 }
 return dispatch(dispatchObj);
}

React.useEffect(() => {
 state.episodes.length === 0 && fetchDataAction();
})

const props = {
 episodes: state.episodes,
 toggleFavAction: toggleFavAction,
 favorites: state.favorites,
 fetchDataAction: fetchDataAction
}
return(
 <React.Fragment>
  <React.Suspense fallback={<div>Loading...</div>}>
    <NavBar fetchDataAction={fetchDataAction} favorites={state.favorites.length}/>
   <section className='episode-layout'>
    <EpisodeList {...props} />
   </section>
  </React.Suspense>
 </React.Fragment>
)
}

