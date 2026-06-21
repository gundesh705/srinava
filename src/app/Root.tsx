import { Outlet } from "react-router";
import { Navigation } from "./components/Navigation";

export function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
