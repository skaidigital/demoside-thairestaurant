import { Bilde, Grid, GridItem, Layout, Section0 } from "../../1_Small/Base";

export const AboutHero = () => {
  return (
    <Section0 id="hero" c="">
      <div class="relative h-380 z-1 flex items-center dimmer-33">
        <Bilde
          src="demoside-thairestaurant/thai-spices_xkcrsh.jpg"
          alt="Skjeer med ulike krydder i"
          layout="fill"
          c="object-cover horFlip"
        />

        <Layout>
          <div class="text-light z-1 relative">
            <Grid>
              <GridItem c="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-2">
                <div class="">
                  <h1 class="text-h5 font-medium">
                    THAIRESTAURANT I OSLO SENTRUM
                  </h1>
                  <h2 className="text-light">
                    Noe du lurer på? Kom i kontakt med oss!
                  </h2>
                </div>
              </GridItem>
            </Grid>
          </div>
        </Layout>
      </div>
    </Section0>
  );
};
