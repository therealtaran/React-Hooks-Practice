const store = {
    currentState: { data: 0 },
    listeners: [],
    reducer(action) {
        const newState = {...store.currentState};
        switch (action.type) {
          case 'ADD':
            return { data: newState.data + 1 };
          case 'SUB':
            if(newState.data>0)
            return {data: newState.data-1}
            else
            alert("Value cannot go below 0")
          default:
            return newState;
        }
    },
    subscribe(l) {
      store.listeners.push(l);
    },
    getSnapshot() {
      return store.currentState;
    },
    dispatch(action) {
      store.currentState = store.reducer(action);
      store.listeners.forEach((l) => l());
      return action;
    },
  };
  
  export { store };
  