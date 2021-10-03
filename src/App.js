import { useEffect } from "react";
import Settings from "./components/Settings";
import ToDoList from "./components/ToDoList/ToDoList";
import configStore from "./stores/configStore";

function App() {
  const darkTheme = configStore((state) => state.darkTheme);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    darkTheme ? body.classList.add("dark") : body.classList.remove("dark");
  }, [darkTheme]);

  return (
    <div className="App">
      <h2>Zustand demo</h2>
      <Settings />
      <ToDoList />
    </div>
  );
}

export default App;
