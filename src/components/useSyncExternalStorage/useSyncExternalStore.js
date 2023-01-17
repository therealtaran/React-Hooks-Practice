import * as React from 'react';
import { useSyncExternalStore } from 'react';


import { store } from './store';

const UseSyncExternalStore=()=> {
  const state = useSyncExternalStore(
    store.subscribe,
    () => store.currentState.data
  );
  //useSyncExtern... is a hook that allows component to sync 
  //subscribe function subscribes updates to external store
  //selector function is used to select relevant part of the external store's state
  //component re renders whenever state updates
  return (
    <div>
      <h1>count: {state}</h1>
      <button onClick={() => store.dispatch({ type: 'ADD' })}>ADD</button>
      <button onClick={() => store.dispatch({ type: 'SUB' })}>SUBTRACT</button>
    </div>
  );
}

export default UseSyncExternalStore