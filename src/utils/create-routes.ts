import DashboardContent from "@/components/dashboard-content";
import { Links } from "@/types/links";
import { Routes } from "@/types/routes";
import { lazy } from "react";


export function createRoutesObject(navigation: Links[]) {
  const routes: Routes = {};
  navigation.forEach((nav) => {
    routes[nav.path] =
      nav.path === "/dashboard"
        ? DashboardContent
        : lazy(() => import(`./${nav.component}`));

    if (nav.children && nav.children.length > 0) {
      nav.children.forEach((childNav) => {
        routes[childNav.path] = lazy(
          () => import(`./${nav.component}/${childNav.component}`)
        );
      });
    }
  });

  console.log('routes', routes);

  return routes;
}
