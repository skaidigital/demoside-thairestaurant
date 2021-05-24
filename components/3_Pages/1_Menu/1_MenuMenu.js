import Link from "next/link";
import { useState } from "react";
import {
  Allergen,
  Barnemeny,
  DrikkeAlkohol,
  DrikkeVanlig,
  Forretter,
  Karriretter,
  Wok,
} from "../../0_Data/Meny";
import { FET, Grid, GridItem, Layout, Section80 } from "../../1_Small/Base";

export const MenuMenu = () => {
  const [menuIndex, setMenuIndex] = useState("Forretter");

  const RenderMenu = () => {
    if (menuIndex == "Forretter") {
      {
        return (
          <>
            <FET>
              <MenuHeading>Vi har deilige forretter</MenuHeading>
            </FET>
            <MapForretter />
          </>
        );
      }
    } else if (menuIndex == "Wok") {
      {
        return (
          <>
            <FET>
              <MenuHeading>Gira på wok?</MenuHeading>
            </FET>
            <MapWok />
          </>
        );
      }
    } else if (menuIndex == "Karriretter") {
      return (
        <>
          <FET>
            <MenuHeading>Vi har Oslo beste karrier</MenuHeading>
          </FET>
          <MapKarriretter />
        </>
      );
    } else if (menuIndex == "Barnemeny") {
      return (
        <>
          <FET>
            <MenuHeading>Barnemeny</MenuHeading>
          </FET>
          <MapBarnemeny />
        </>
      );
    } else {
      return (
        <>
          <FET>
            <MenuHeading>Vanlig drikke</MenuHeading>
          </FET>
          <MapDrikkeVanlig />
          <FET>
            <MenuHeading>Alkoholholdig drikke</MenuHeading>
          </FET>
          <MapDrikkeAlkohol />
        </>
      );
    }
  };

  return (
    <Section80 id="menu">
      <Layout>
        <Grid>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3">
            <div class="flex flex-wrap mb-24">
              {MenuCategories.map(({ item }, index) => {
                return (
                  <Link href="" key={index}>
                    <a
                      id={item}
                      value={item}
                      onClick={(e) =>
                        setMenuIndex(e.target.getAttribute("value"))
                      }
                      className="mr-56 text-h4 font-semibold menuTab"
                    >
                      {item}
                    </a>
                  </Link>
                );
              })}
            </div>
          </GridItem>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3 mb-80">
            <Grid>{RenderMenu()}</Grid>
          </GridItem>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3">
            <Grid>
              <FET>
                <MenuHeading>Allergen</MenuHeading>
              </FET>
              {MapAllergen()}
            </Grid>
          </GridItem>
        </Grid>
      </Layout>
    </Section80>
  );
};

const MenuHeading = ({ children }) => {
  return <h2 class="mb-8 mt-24">{children}</h2>;
};

const MapAllergen = () => {
  return Allergen.map(({ letter, description }) => {
    return (
      <GridItem c="col-span-2 lg:col-span-3">
        <div class="flex ">
          <h3 class="text-h5 mb-0 flex self-center mr-16">{letter}</h3>
          <p className="mb-0">{description}</p>
        </div>
      </GridItem>
    );
  });
};

const MapForretter = () => {
  return Forretter.map(({ item, description, price, allergens }) => {
    return (
      <GridItem c="col-span-4 lg:col-span-6 grid items-self-stretch">
        <div className="mb-24 flex flex-col justify-between">
          <h3 className="text-h4 text-dark mb-8">{item}</h3>
          <p className="mb-8 mr-24">{description}</p>
          <div class="flex justify-between">
            <p className="font-semibold mb-8">{price},-</p>
            <p class="mb-8 mr-24 font-medium text-darkVar">{allergens}</p>
          </div>
        </div>
      </GridItem>
    );
  });
};

const MapWok = () => {
  return Wok.map(({ item, description, price, allergens }) => {
    return (
      <GridItem c="col-span-4 lg:col-span-6 lg:mr-24 grid items-self-stretch">
        <div className="flex flex-col justify-between mb-24">
          <h3 className="text-h4 text-dark mb-8">{item}</h3>
          <p className="mb-8 mr-24">{description}</p>
          <div class="flex justify-between">
            <p className="font-semibold mb-8">{price},-</p>
            <p class="mb-8 mr-24 font-medium text-darkVar">{allergens}</p>
          </div>
        </div>
      </GridItem>
    );
  });
};

const MapKarriretter = () => {
  return Karriretter.map(({ item, description, price, allergens }) => {
    return (
      <GridItem c="grid items-self-stretch col-span-4 lg:col-span-6 lg:mr-24">
        <div className="flex flex-col justify-between mb-24">
          <h3 className="text-h4 text-dark mb-8">{item}</h3>
          <p className="mb-8 ">{description}</p>
          <div class="flex justify-between">
            <p className="font-semibold mb-8">{price},-</p>
            <p class="mb-8 mr-24 font-medium text-darkVar">{allergens}</p>
          </div>
        </div>
      </GridItem>
    );
  });
};

const MapBarnemeny = () => {
  return Barnemeny.map(({ item, description, price, allergens }) => {
    return (
      <GridItem c="grid items-self-stretch col-span-4 lg:col-span-6 lg:mr-24">
        <div className="flex flex-col justify-between mb-24">
          <h3 className="text-h4 text-dark mb-8">{item}</h3>
          <p className="mb-8">{description}</p>
          <div class="flex justify-between">
            <p className="font-semibold mb-8">{price},-</p>
            <p class="mb-8 mr-24 font-medium text-darkVar">{allergens}</p>
          </div>
        </div>
      </GridItem>
    );
  });
};

const MapDrikkeAlkohol = () => {
  return DrikkeAlkohol.map(({ item, description, price }) => {
    return (
      <GridItem c="grid items-self-stretch col-span-4 lg:col-span-6">
        <div className="flex flex-col justify-between mb-24">
          <h3 className="text-h4 text-dark mb-8">{item}</h3>
          <p className="mb-8 mr-24">{description}</p>
          <span className="font-semibold">{price},-</span>
        </div>
      </GridItem>
    );
  });
};

const MapDrikkeVanlig = () => {
  return DrikkeVanlig.map(({ item, description, price }) => {
    return (
      <GridItem c="grid items-self-stretch col-span-4 lg:col-span-6">
        <div className="flex flex-col justify-between mb-24">
          <h3 className="text-h4 text-dark mb-8">{item}</h3>
          <p className="mb-8 mr-24">{description}</p>
          <span className="font-semibold">{price},-</span>
        </div>
      </GridItem>
    );
  });
};

const MenuCategories = [
  { item: "Forretter", index: "0" },
  { item: "Wok", index: "1" },
  { item: "Karriretter", index: "2" },
  { item: "Barnemeny", index: "3" },
  { item: "Drikke", index: "3" },
];
