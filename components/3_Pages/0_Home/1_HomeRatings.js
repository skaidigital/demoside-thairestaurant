import { Grid, GridItem, Layout } from "../../1_Small/Base";
import { RatingsGoogle, RatingsTripadivsor } from "../../1_Small/Groups";

export const HomeRatings = () => {
  return (
    <section id="ratings" className="bg-lightVar py-32">
      <Layout>
        <Grid>
          <GridItem c="col-span-4 lg:col-span-3 lg:col-start-1 flex content-center">
            <RatingsTripadivsor rating="4.8" amount="42" />
          </GridItem>
          <GridItem c="col-span-4 lg:col-span-3 row-start-2 lg:row-start-1 lg:col-start-7">
            <RatingsGoogle rating="4.6" amount="102" />
          </GridItem>
        </Grid>
      </Layout>
    </section>
  );
};
