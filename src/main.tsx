import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormsPage from "./pages/FormsPage";
import PeoplePage from "./pages/PeoplePage";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <div>
//       <Route path="/" element={<HomePage />}>
//         <Route path="forms" element={<FormsPage />} />
//         <Route path="people" element={<PeoplePage />} />
//       </Route>
//     </div>
//   )
// );

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} />
     */}
    <BrowserRouter future={{ v7_startTransition: true }}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
