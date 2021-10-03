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

export default todoStore;
