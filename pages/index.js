import { CTATwoButtons } from "../components/2_Big/CTA";
import { Header } from "../components/2_Big/Headers";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import { HomeHero } from "../components/3_Pages/0_Home/0_HomeHero";
import { HomeRatings } from "../components/3_Pages/0_Home/1_HomeRatings";
import { HomeMenu } from "../components/3_Pages/0_Home/2_HomeMenu";
import { HomeAbout } from "../components/3_Pages/0_Home/3_HomeAbout";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <HomeHero />
      <HomeRatings />
      <HomeMenu />
      <CTATwoButtons />
      <HomeAbout />
      <Footer />
    </div>
  );
}
