import {
  Bilde,
  Grid,
  GridItem,
  HeroContainerUtenPadding,
  Layout,
} from "../../1_Small/Base";
import { PrimaryButton, SecondaryButton } from "../../1_Small/Buttons";

export const HomeHero = () => {
  return (
    <HeroContainerUtenPadding id="hero" c="h-650 ">
      <div class="h-650 relative flex items-center dimmer-50">
        <Bilde
          src="demoside-thairestaurant/thai-soup_dgazsm.jpg"
          alt="Pad thai som ser deilig ut"
          layout="fill"
          c="object-cover z-0"
        />
        <Layout>
          <Grid>
            <GridItem c="col-span-4 md:col-span-8 lg:col-span-6">
              <div class="relative z-1 text-light">
                <h1 class="text-h5 mb-8 font-medium">THAIRESTAURANT I OSLO</h1>
                <h2 className="mb-32 text-h1 text-light">
                  Smaken av Bangkok i Oslo Sentrum
                </h2>
                <div>
                  <PrimaryButton
                    btnText="BOOK ET BORD"
                    href=""
                    bgColor="primary"
                    txtColor="white"
                    c="md:mr-8"
                  />
                  <SecondaryButton btnText="SE VÅR MENY" href="/meny" />
                </div>
              </div>
            </GridItem>
          </Grid>
        </Layout>
      </div>
    </HeroContainerUtenPadding>
  );
};
