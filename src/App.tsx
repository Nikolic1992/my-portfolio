import { useRoutes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectPage";

const routesConfig = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/:id",
    element: <ProjectsPage />,
  },
];

function App() {
  const routing = useRoutes(routesConfig);
  return routing;
}

export default App;
