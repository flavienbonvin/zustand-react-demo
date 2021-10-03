import configStore from "../stores/configStore";

const Settings = () => {
  const setDarkTheme = configStore((state) => state.setDarkTheme);
  const darkTheme = configStore((state) => state.darkTheme);

  return (
    <div>
      <h3>User Settings</h3>
      <button onClick={() => setDarkTheme(!darkTheme)}>
        Change to {darkTheme ? "light" : "dark"} theme
      </button>
    </div>
  );
};

export default Settings;
