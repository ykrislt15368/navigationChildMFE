import { useRouter } from "next/router";
import { useEffect } from "react";

const detectEnvironment = () => (typeof window === 'undefined') ? "Server Component" : "Client Component";

export default function Home() {
  console.log('navigation env', detectEnvironment());
  const router = useRouter();

  useEffect(() => {
    // Redirect to /dashboard
    router.push("/dashboard");
  }, [router]);

  return null;
}

// export const getStaticProps: GetStaticProps<{links: Links[]}> = async context => {
//   const fetchedLinks = await fetch('http://localhost:3002/api/get-navigation', {method: 'GET'});
//   const links = await fetchedLinks.json();
//   console.log('fetched links from API route get-navigation', links);

//   return {
//     props: links
//   }
// }
