# Zustand React demo

Small project that shows how Zustand can be used in a React application to easily maintian one (or multiple) global store.

This project was presented in this blog post: https://www.flavienbonvin.com/best-react-state-you-dont-know

Online demo: https://codesandbox.io/s/zustand-react-demo-9gzlu

## Running the project

1. Clone the project 
2. `yarn` or `npm install` depending on your package manager
3. `yarn start` or `npm start` depending on your package manager

## Stores in the project

The project has two differten stores: 

* One for the settings, stores wether the user has activated the darkmode 
* One for the data, stores a list of random todos

### Settings store 

The settings stores is persisted, the state is saved in the local storage and automatically retrived when loaded. 

``` javascript
import create from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  darkTheme: false,
  setDarkTheme: (darkTheme) => set({ darkTheme }),
});

const configStore = create(persist(store));
```

### Data store

This stores is not persisted, data are fetched from a dummy API. It's posssible to complete, add and remove todos.

``` javascript
import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  addTodo: (todo) =>
    set((state) => ({
      todos: [todo, ...state.todos],
    })),
  removeTodo: (todo) =>
    set((state) => ({ todos: state.todos.filter((item) => item !== todo) })),
  toggleComplete: (todo) =>
    set((state) => {
      const newArray = state.todos.map((item) => {
        if (item === todo) {
          return { ...item, completed: !todo.completed };
        }
        return item;
      });

      set({ todos: newArray });
    }),
});

const todoStore = create(devtools(store));
```
