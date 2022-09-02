import { Outlet } from "react-router-dom";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";


export const SharedLayout = () => {
  return (
    <>
    <Header />
      <Outlet />
      <Footer/>
    </>
  );
};
