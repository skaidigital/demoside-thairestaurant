import { Grid, GridItem, Layout, Section160 } from "../../1_Small/Base";
import {
  BgImageCardLarge,
  BgImageCardSmall,
} from "../../1_Small/Cards/ImageCards";

export const HomeMenu = () => {
  return (
    <Section160 id="menu" c="">
      <Layout>
        <Grid>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-10">
            <div class="mb-56">
              <h1 class="text-h5 mb-8 font-medium">
                THAIRESTAURANT I OSLO SENTRUM
              </h1>
              <h2 class="text-dark">
                Vi lager deilig, autentisk thaimat med norske, kortreiste
                råvarer. Her er noen favoritter
              </h2>
            </div>
          </GridItem>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-6">
            <BgImageCardLarge
              alt="this is an alt text"
              src="demoside-thairestaurant/paneng-curry_o8lyvx.jpg"
              text={<h3 className="text-light text-h2">Paneng curry</h3>}
            />
          </GridItem>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-6">
            <BgImageCardLarge
              alt="this is an alt text"
              src="demoside-thairestaurant/thai-soup_dgazsm.jpg"
              text={<h3 className="text-light text-h2">Pad Thai</h3>}
            />
          </GridItem>
          <GridItem c="hidden md:flex col-span-4 lg:col-span-3">
            <BgImageCardSmall
              h="380"
              alt="this is an alt text"
              src="demoside-thairestaurant/red-curry_iqmn08.jpg"
              text={<h3 className="text-light text-h4">Red Curry</h3>}
            />
          </GridItem>
          <GridItem c="hidden md:flex col-span-4 lg:col-span-3">
            <BgImageCardSmall
              h="380"
              alt="this is an alt text"
              src="demoside-thairestaurant/pad-thai_savhx0.jpg"
              text={<h3 className="text-light text-h4">Pad Thai</h3>}
            />
          </GridItem>
          <GridItem c="hidden md:flex col-span-4 lg:col-span-3">
            <BgImageCardSmall
              h="380"
              alt="this is an alt text"
              src="demoside-thairestaurant/massaman-curry_dba2so.jpg"
              text={<h3 className="text-light text-h4">Massaman</h3>}
            />
          </GridItem>
          <GridItem c="hidden md:flex col-span-4 lg:col-span-3">
            <BgImageCardSmall
              h="380"
              alt="this is an alt text"
              src="demoside-thairestaurant/red-curry_iqmn08.jpg"
              text={<h3 className="text-light text-h4">Red Curry</h3>}
            />
          </GridItem>
        </Grid>
      </Layout>
    </Section160>
  );
};
