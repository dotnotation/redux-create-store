function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  };

  return {
    dispatch,
    getState
  };
};

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
}


function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

let store = createStore(reducer) // createStore takes the reducer as an argument
// you want the dispatch method to all a reducer every time an action is dispatched 
// but you want createStore to be generic enough for any JS app 
// you accomplish this by passing the reducer as an argument 
store.dispatch({ type: '@@INIT' });
let button = document.getElementById('button');

button.addEventListener('click', () => {
  store.dispatch({ type: 'INCREASE_COUNT' });
});
