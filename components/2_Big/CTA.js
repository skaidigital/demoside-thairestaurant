import { Grid, GridItem, Layout, Section80 } from "../1_Small/Base";
import { PrimaryButton, SecondaryButton } from "../1_Small/Buttons";

export const CTAOneButton = () => {
  return (
    <Section80 id="cta" farge="primary">
      <Layout>
        <Grid>
          <GridItem c="col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center">
            <h2 class="text-white mb-32">
              Kom og spis Oslos garantert beste thaimat!
            </h2>
            <div class="flex justify-center flex-col md:flex-row">
              <PrimaryButton
                btnText="BOOK ET BORD"
                href=""
                bgColor="dark"
                txtColor="white"
              />
            </div>
          </GridItem>
        </Grid>
      </Layout>
    </Section80>
  );
};

export const CTATwoButtons = () => {
  return (
    <Section80 id="cta" farge="primary">
      <Layout>
        <Grid>
          <GridItem c="col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center">
            <h2 class="text-white mb-32">
              Kom og spis Oslos garantert beste thaimat!
            </h2>
            <div class="flex flex-col justify-center md:flex-row">
              <PrimaryButton
                btnText="BOOK ET BORD"
                href=""
                c="md:mr-8"
                bgColor="dark"
                txtColor="white"
              />
              <SecondaryButton
                btnText="SE VÅR MENY"
                href=""
                c="md:ml-8"
                bgColor="white"
                txtColor="black"
              />
            </div>
          </GridItem>
        </Grid>
      </Layout>
    </Section80>
  );
};
