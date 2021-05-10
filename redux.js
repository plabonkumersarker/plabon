//Create a Redux Store

const reducer = (state = 5) => {
    return state;
  }
  
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:
  const state = 5;
  const store = Redux.createStore(reducer)

  //Get State from the Redux Store

  const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  
  const currentState = store.getState();

  