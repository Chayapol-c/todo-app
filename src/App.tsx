import bgLight from "./images/bg-desktop-light.jpg";
import bgDark from "./images/bg-desktop-dark.jpg";
import moonIcon from "./images/icon-moon.svg";
import sunIcon from "./images/icon-sun.svg";
import { useLayoutEffect } from "react";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { isDarkModeAtom } from "./atom";
import { useAtom } from "jotai";

function App() {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

  useLayoutEffect(() => {
    document.querySelector("html")?.classList?.toggle("dark");
  }, [isDarkMode]);

  return (
    <div className="min-h-screen">
      <img
        src={isDarkMode ? bgDark : bgLight}
        alt="bg-light"
        className="fixed left-0 top-0 -z-10 w-full aspect-auto md:object-contain object-cover h-[225px] md:h-fit"
      />
      <main className="md:mx-auto md:max-w-lg pt-12 px-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold uppercase tracking-[0.5em] text-white">
            todo
          </h1>
          <button onClick={() => setIsDarkMode((prevState) => !prevState)}>
            {isDarkMode ? (
              <img src={sunIcon} alt="" />
            ) : (
              <img src={moonIcon} alt="" />
            )}
          </button>
        </div>
        <TodoForm />
        <TodoList />
      </main>
      <p className="mt-6 text-center text-gray-500">
        Drag and drop to reorder list
      </p>
    </div>
  );
}

export default App;
