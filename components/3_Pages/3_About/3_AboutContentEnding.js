import { Bilde, Grid, GridItem, Layout, Section80 } from "../../1_Small/Base";

export const AboutContentEnding = () => {
  return (
    <Section80 id="about-2" c="">
      <Layout>
        <Grid>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-5">
            <h1 class="text-h5 font-medium mb-8">
              THAIRESTAURANT I OSLO SENTRUM
            </h1>
            <h2 className="mb-24 text-dark">Vi elsker mat</h2>
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
                src="demoside-thairestaurant/benjamin-sow-kKDxySm_8dE-unsplash_gazutg.jpg"
                alt="Thaidame som pakker inn matvare"
                w={1500}
                h={1500}
                c="object-cover "
              />
            </div>
            <div className="hidden lg:block">
              <Bilde
                src="demoside-thairestaurant/janesfairytale-IkaxonGjwSY-unsplash_q16dnf.jpg"
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
                src="demoside-thairestaurant/evan-krause-JTAR4XJ7FbA-unsplash_hzogrb.jpg"
                alt="Thaidame som pakker inn matvare"
                w={1500}
                h={1500}
                c="object-cover "
              />
            </div>
            <div className="hidden lg:block">
              <Bilde
                src="demoside-thairestaurant/arty-lmnQJk5mumo-unsplash_j3e3vt.jpg"
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
