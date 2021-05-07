import { Bilde, Grid, GridItem, Layout, Section80 } from "../../1_Small/Base";

export const AboutContentIntro = () => {
  return (
    <Section80 id="intro">
      <Layout>
        <Grid>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-5">
            <h1 class="text-h5 font-medium mb-8">
              THAIRESTAURANT I OSLO SENTRUM
            </h1>
            <h2 className="mb-24 text-dark">Bangkok Restaurant</h2>
            <p className="">
              Vi ville skape den rette atmosfæren for våre gjester og å få en
              følelse av å vandre rett inn fra gaten inn i en ekte Thai
              restaurant med noen av den beste Thai mat i Oslo. Derfor var det
              veldig viktig for oss å bruke riktige materialer og teknikker fra
              Thailand for å lage den riktige atmosfæren.
            </p>
            <p>
              Innredningen med flere tusen meter bambus er hentet i container
              fra Thailand. Det samme gjelder takviftene og belysning med
              bambus, palmer, lysslynger og det meste av innredningen. Over
              høytalerne spiller vi dempet moderne Thai musikk for å skape den
              helt riktige stemningen.
            </p>
          </GridItem>
          <GridItem c="col-span-4 lg:col-span-3 lg:col-start-7">
            <div className="mb-24">
              <Bilde
                src="demoside-thairestaurant/thai-woman_bruezd.jpg"
                alt="Thaidame som pakker inn matvare"
                w={1500}
                h={1500}
                c="object-cover "
              />
            </div>
            <div className="hidden lg:block">
              <Bilde
                src="demoside-thairestaurant/thai-kitchen-2_yj4cy6.jpg"
                alt="Thaidame som pakker inn matvare"
                w={1500}
                h={1500}
                c="object-cover "
              />
            </div>
          </GridItem>
          <GridItem c="col-span-4 lg:col-span-3">
            <div className="mb-24">
              <Bilde
                src="demoside-thairestaurant/satay_t52ev0.jpg"
                alt="Thaidame som pakker inn matvare"
                w={1500}
                h={1500}
                c="object-cover "
              />
            </div>
            <div className="hidden lg:block">
              <Bilde
                src="demoside-thairestaurant/thai-woman_bruezd.jpg"
                alt="Thaidame som pakker inn matvare"
                w={1500}
                h={1500}
                c="object-cover "
              />
            </div>
          </GridItem>
        </Grid>
      </Layout>
    </Section80>
  );
};
