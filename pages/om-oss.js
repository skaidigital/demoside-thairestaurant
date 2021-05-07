import { NextSeo } from "next-seo";
import { CTATwoButtons } from "../components/2_Big/CTA";
import { Header } from "../components/2_Big/Headers";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import { AboutHero } from "../components/3_Pages/3_About/0_AboutHero";
import { AboutContentIntro } from "../components/3_Pages/3_About/1_AboutContentIntro";
import { AboutContentWhy } from "../components/3_Pages/3_About/2_AboutContentWhy";
import { AboutContentEnding } from "../components/3_Pages/3_About/3_AboutContentEnding";

export const OmOss = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <Header />
      <Navbar />
      <AboutHero />
      <AboutContentIntro />
      <AboutContentWhy />
      <AboutContentEnding />
      <CTATwoButtons />
      <Footer />
    </>
  );
};

export default OmOss;
