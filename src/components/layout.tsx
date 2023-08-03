import React from "react";
import Navigation from "@/components/navigation";
import styles from "@/styles/Dashboard.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${styles.dashboard} ${inter.className}`}>
      <Navigation orientation="vertical" />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
