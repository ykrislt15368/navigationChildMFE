import Navbar from "./navbar";
import { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Navigation = ({orientation} : {orientation: 'vertical' | 'horizontal'}) => {
    const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchLinks();
  }, []);

  async function fetchLinks(){
    const fetchedLinks = await fetch('http://localhost:3002/api/get-navigation', {method: 'GET'});
    const {links} = await fetchedLinks.json();
    console.log(links);
    setLinks(links);
  }

  return <Navbar navigation={links} styleName={`${styles.navbar} ${styles['navbar-'+ orientation]} ${inter.className}`}/>
}

export default Navigation;