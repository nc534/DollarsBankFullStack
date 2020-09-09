# Global Context & Data Store

The following snippets are extracted from `./components/App.js` and layed out for a clearer structural explanation.

1. First, the initial state format is declared for later use, and also for development reference.

```js
// snippet
const initialState = {
  user: {
    username: "joyfulpainter",
    password: "42!HappyTrees",
  },
  accounts: [],
};
```

2. Next, the Reducer is defined. It handles actions to be carried out upon the global state via switch statement. For additional functionality, add additional switch cases.

```js
// snippet
const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_ACCOUNTS":
      return {
        ...state,
        accounts: action.payload,
      };
    default:
      return state;
  }
};
```

3. The `AppContext` constant is then defined using React's `createContext()` hook, basing the initial 'state' upon our `initialState` defined up above. The `Store` functional component is additionally defined for use immediately below - it uses the `useReducer()` hook to provide the state and a method to update it to children components.

```js
// snippet
export const AppContext = createContext(initialState);
const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};
```

4. `App` is now wrapped in the `Store`, supplying that global data store to the React component hierarchy.

```js
// snippet
export default function App() {
  return (
    <Store>
      <Router/>
    </Store>
  );
}
```

Children components of `App` can use the following steps to access and update values in `AppContext`:

1. `import { AppContext } from "../App";`
2. `const [state, dispatch] = useContext(AppContext);`
