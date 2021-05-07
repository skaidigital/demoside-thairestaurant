import { NextSeo } from "next-seo";
import { Header } from "../components/2_Big/Headers";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import { MenuMenu } from "../components/3_Pages/1_Menu/1_MenuMenu";

export const Meny = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <Header />
      <Navbar />
      {/* <MenuNavbar /> */}
      <MenuMenu />
      <Footer />
    </>
  );
};

export default Meny;
