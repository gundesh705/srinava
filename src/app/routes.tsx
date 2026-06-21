import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { WorkPage } from "./pages/WorkPage";
import { MachineryDetailPage } from "./pages/MachineryDetailPage";
import { FacilitiesPage } from "./pages/FacilitiesPage";
import { TeamPage } from "./pages/TeamPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "work", Component: WorkPage },
      { path: "work/machinery/:name", Component: MachineryDetailPage },
      { path: "facilities", Component: FacilitiesPage },
      { path: "team", Component: TeamPage },
    ],
  },
]);
