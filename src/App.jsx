import React from 'react';
import { Store } from './store';
import NavBar from './NavBar';

//TODO: add input in the header to allow someone to search
//TODO: maintain favorites between searches(GraphQL/DB?)
export default function App(props) {
  const { state } = React.useContext(Store);
  console.log('App:', state);
  return(
    <React.Fragment>
      {/* <header className='header'>
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your Episode</p>
        </div>
        <div>
          <Link to='/'>Home</Link>{' '}
          <Link to='/FavPage'>Favorites: {state.favorites.length}</Link>
        </div>
      </header> */}
      {/* <NavBar favorites={state.favorites.length} /> */}
      {props.children}
    </React.Fragment>
  )
}
