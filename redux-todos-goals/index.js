function createStore(reducer) {
  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

const addTodoAction = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  };
};

const removeTodoAction = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};

const toggleTodoAction = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

const addGoalAction = (goal) => {
  return {
    type: ADD_GOAL,
    goal,
  };
};

const removeGoalAction = (id) => {
  return {
    type: REMOVE_GOAL,
    id,
  };
};

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todos]);
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    default:
      return state;
  }
}

function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goals]);
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id);
    default:
      return state;
  }
}

function app(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action),
  };
}

const store = createStore(app);

store.subscribe(() => console.log("The new state is ", store.getState));

store.dispatch(
  addTodoAction({
    id: 0,
    name: "walk dog",
    complete: false,
  })
);
