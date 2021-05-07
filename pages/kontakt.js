import { NextSeo } from "next-seo";
import { CTATwoButtons } from "../components/2_Big/CTA";
import { Header } from "../components/2_Big/Headers";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import { ContactHero } from "../components/3_Pages/2_Contact/0_ContactHero";
import { ContactInformation } from "../components/3_Pages/2_Contact/1_ContactInformation";
import { ContactMap } from "../components/3_Pages/2_Contact/2_ContactMap";

export const Kontakt = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <Header />
      <Navbar />
      <ContactHero />
      <ContactInformation />
      <ContactMap />
      <CTATwoButtons />
      <Footer />
    </>
  );
};

export default Kontakt;
