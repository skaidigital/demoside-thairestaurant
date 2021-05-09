import { Grid, GridItem, Layout, Section160 } from "../../1_Small/Base";

export const ContactInformation = () => {
  return (
    <Section160 id="contact-info">
      <Layout>
        <Grid>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-8">
            <h2 className="text-h3 text-dark mb-24">Åpningstider</h2>
          </GridItem>
          <GridItem c="col-span-2 md:col-span-3 lg:col-span-2 lg:col-start-8 col-start-1 lg:row-start-8">
            <h3 className="text-h5">Mandag - Fredag:</h3>
          </GridItem>
          <GridItem c="col-span-2 md:col-span-5 lg:col-span-4 lg:col-start-10 lg:row-start-2">
            <div className="mb-24">
              <p className="mb-8">15:00 - 22:00</p>
            </div>
          </GridItem>
          <GridItem c="col-span-2 md:col-span-3 lg:col-span-2 lg:col-start-8 lg:row-start-3">
            <h3 className="text-h5">Lørdag:</h3>
          </GridItem>
          <GridItem c="col-span-2 md:col-span-5 lg:col-span-4 lg:col-start-10 lg:row-start-3">
            <div className="mb-24">
              <p className="mb-8">13:00 - 22:00</p>
            </div>
          </GridItem>
          <GridItem c="col-span-2 md:col-span-3 lg:col-span-2 lg:col-start-8 lg:row-start-4">
            <h3 className="text-h5">Søndag:</h3>
          </GridItem>
          <GridItem c="col-span-2 md:col-span-5 lg:col-span-4 lg:col-start-10 lg:row-start-4">
            <div className="mb-24">
              <p className="mb-8">Stengt</p>
            </div>
          </GridItem>

          {/* //! Kontaktinformasjon */}
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-6 lg:row-start-1 lg:col-start-2">
            <h2 className="text-h3 text-dark mb-24">Kontaktinformasjon</h2>
          </GridItem>
          <GridItem c="col-span-4 md:col-span-3 lg:col-span-2 lg:row-start-2 lg:col-start-2">
            <h3 className="text-h5">ADRESSE</h3>
          </GridItem>
          <GridItem c="col-span-4 md:col-span-5 lg:col-span-4 lg:col-start-4 lg:row-start-2">
            <div className="mb-24">
              <p className="mb-8">Henrik Ibsens gate 100</p>
              <p className="mb-8">0255 Oslo</p>
              <p className="mb-8">Norge</p>
            </div>
          </GridItem>
          <GridItem c="col-span-4 md:col-span-3 lg:col-span-2 lg:col-start-2 lg:row-start-3">
            <h3 className="text-h5">TELEFON</h3>
          </GridItem>
          <GridItem c="col-span-4 md:col-span-5 lg:col-span-4 lg:col-start-4 lg:row-start-3">
            <div className="mb-24">
              <a href="tel:" className="mb-8">
                (+47) 972 45 334
              </a>
            </div>
          </GridItem>
          <GridItem c="col-span-4 md:col-span-3 lg:col-span-2 lg:col-start-2 lg:row-start-4">
            <h3 className="text-h5">E-POST</h3>
          </GridItem>
          <GridItem c="col-span-4 md:col-span-5 lg:col-span-4 lg:col-start-4 lg:row-start-4">
            <div className="mb-24">
              <a href="mailto:" className="mb-8">
                kontakt@bangkokrestauranten.no
              </a>
            </div>
          </GridItem>
        </Grid>
      </Layout>
    </Section160>
  );
};
