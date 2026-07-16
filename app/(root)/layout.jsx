"use client";

import { useEffect, useState } from "react";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import Loading from "../Loading";
import ScrollToTop from "react-scroll-to-top";

export default function MainLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
    <ScrollToTop width="40" height="40" color="green" className="flex justify-center" smooth/>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}