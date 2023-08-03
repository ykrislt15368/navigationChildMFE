import { useRouter } from "next/router";
import { Suspense, useEffect, useMemo, useState } from "react";
import { createRoutesObject } from "@/utils/create-routes";
import { Links } from "@/types/links";


const RouterOutlet = () => {
  const router = useRouter();

  const [navigation, setNavigation] = useState<Links[]>([]);

  useEffect(() => {
    fetchLinks();
  }, []);

  async function fetchLinks(){
    const fetchedLinks = await fetch('http://localhost:3002/api/get-navigation', {method: 'GET'});
    const {links} = await fetchedLinks.json();
    console.log("fetched links from api", links);
    setNavigation(links);
  }
  

  // Define routes and lazy import corresponding components
  const routes = useMemo(() => createRoutesObject(navigation), [navigation]);

  console.log('created routes obj', routes);
  
  // {
  //   "/dashboard": DashboardContent,
  //   "/dashboard/profile": lazy(() => import("./profile")),
  //   "/dashboard/settings": lazy(() => import("./settings")),
  //   // Add more routes as needed
  // };

  const Component = routes[router.pathname] || null;

  return Component ? <Component /> : <div>Page not found</div>;
};

const DashboardPage = () => {
  return (
      <Suspense fallback={<p>Loading....</p>}>
        <RouterOutlet />
      </Suspense>
  );
};

export default DashboardPage;
