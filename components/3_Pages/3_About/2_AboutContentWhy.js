import { Bilde, Grid, GridItem, Layout, Section80 } from "../../1_Small/Base";

export const AboutContentWhy = () => {
  return (
    <Section80 id="why" c="">
      <div class="z-1 relative dimmer-33">
        <Layout>
          <Bilde
            src="demoside-thairestaurant/kjokken_sr7cmd.jpg"
            alt="Two thai chefs in the kitchen"
            layout="fill"
            c="object-cover horFlip"
          />

          <div class="z-1 relative text-light">
            <Grid>
              <GridItem c="col-span-4 md:col-span-8 lg:col-span-7 py-120">
                <h2 class="text-light mb-8">Hvorfor Bangkok Restaurant?</h2>
                <p>
                  Vi synes også at navnet Tuk Tuk Thai forplikter, så vi har
                  gått til anskaffelse av en ekte Tuk Tuk som du om sommeren
                  ofte finner parkert utenfor restauranten.{" "}
                </p>
                <p>
                  Dette er en påkostet 7 seter limousin versjon som ofte blir
                  brukt som shuttle transport på hoteller i Bangkok. Det er også
                  mulig i sommer månedene å reservere denne. Vi kan innenfor
                  ring 1 kjøre til og fra ved fødselsdags selskaper m.m. Ta
                  eventuelt kontakt via vårt kontaktskjema her på vår
                  hjemmeside.
                </p>
              </GridItem>
            </Grid>
          </div>
        </Layout>
      </div>
    </Section80>
  );
};
