import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { NextUIProvider } from "@nextui-org/react";
import FormsPage from "./pages/FormsPage";
import PeoplePage from "./pages/PeoplePage";
import { BrowserRouter } from "react-router-dom";
import MainAPP from "./pages/MainAPP";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <main className="dark text-foreground scroll bg-background h-dvh   overflow-auto">
        <Routes>
          <Route path="/" element={<MainAPP />}>
            <Route path="" element={<HomePage />} />

            <Route path="form" element={<FormsPage />} />
            <Route path="people" element={<PeoplePage />} />
          </Route>
        </Routes>
      </main>
    </NextUIProvider>
  );
}

export default App;
