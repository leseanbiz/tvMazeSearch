import React from 'react';
import { Store } from './store';
import './index.css';
import NavBar from './NavBar';
const EpisodeList  = React.lazy(() => import('./EpisodeList'));


export default function FavPage () {

 const { state, dispatch } = React.useContext(Store);

 console.log('Favpage: ', state);

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

 const props = {
  episodes: state.favorites,
  toggleFavAction: toggleFavAction,
  favorites: state.favorites
 }
 
 return(
   <React.Suspense fallback={<div>Loading...</div>}>
    <NavBar favorites={state.favorites.length}/>
   <section className='episode-layout'>
    <EpisodeList {...props} />
   </section>
   </React.Suspense>
 )
}

