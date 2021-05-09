import Link from "next/link";
import { Bilde, Grid, GridItem, Layout, Section160 } from "../../1_Small/Base";

export const HomeAbout = () => {
  return (
    <Section160>
      <Layout>
        <Grid>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-12">
            <div class="mb-56">
              <h1 class="text-h5">THAIRESTAURANT I OSLO</h1>
              <h2 class="text-dark">
                Grunnen til at vi mener vi lager den beste thaimaten i Oslo, er
                at den lages med kjærlighet
              </h2>
            </div>
          </GridItem>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-12">
            <div className="relative h-380 dimmer-50 dimmer-100 text-light flex p-24 items-end">
              <Link href="om-oss">
                <a className="textDeco">
                  <Bilde
                    src="demoside-thairestaurant/thai-kitchen_zm5ttz.jpg"
                    alt="Thailandsk kokk som lager wok"
                    layout="fill"
                    c="object-cover"
                  />
                  <div class="z-1 relative">
                    <h3 class="text-light mb-8">VÅR HISTORIE</h3>
                    <p className="mb-0 max-w-340">
                      Bestefar flyttet til Norge for 28 år siden. Dette er en
                      setning til. Les vår historie her
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          </GridItem>
        </Grid>
      </Layout>
    </Section160>
  );
};
