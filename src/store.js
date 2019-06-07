import React from 'react';
export const Store = React.createContext();
const initialState = {
 episodes: [],
 favorites: []
}

function reducer(state, action) {
 switch (action.type) {
  case 'FETCH_DATA':
    return { ...state, episodes: action.payload };
  case 'FAV_ADD':
    // console.log("ADD: ",state.favorites);
    return { ...state, favorites: [...state.favorites, action.payload]};
  case 'REMOVE_FAV':
    // console.log("REMOVE: ",state.favorites);
    return { ...state, favorites: action.payload};
  default:
    return state;
 }
}

export function StoreProvider(props) {
 const [state, dispatch] = React.useReducer(reducer, initialState);
 const value = { state, dispatch }
 return <Store.Provider value={value}>{props.children}
 </Store.Provider>
}