import Link from "next/link";
import { useState } from "react";
import { Breakfast, Dinner } from "../../0_Data/Meny";
import { Grid, GridItem, Layout, Section40 } from "../../1_Small/Base";
//
export const MenuMenu = () => {
  const [menuIndex, setMenuIndex] = useState("FROKOST");
  //
  const toggleTab = (e) => {
    e.preventDefault();
    setMenuIndex(event.target.getAttribute("value"));
    console.log(menuIndex);
  };
  //
  const RenderMenu = () => {
    if (menuIndex == "FROKOST") {
      {
        return <MapBreakfast />;
      }
    } else if (menuIndex == "MIDDAG") {
      {
        return <MapDinner />;
      }
    } else if (menuIndex == "DRIKKE") {
      return;
    }
  };

  //
  return (
    <Section40 id="menu">
      <Layout>
        <Grid>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-12">
            <div class="flex flex-wrap">
              {MenuCategories.map(({ item }, index) => {
                return (
                  <Link href="" key={index}>
                    <a
                      value={item}
                      onClick={toggleTab}
                      className={"mr-56 text-h4 font-semibold"}
                    >
                      {item}
                    </a>
                  </Link>
                );
              })}
            </div>
          </GridItem>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-12">
            {RenderMenu()}
          </GridItem>
        </Grid>
      </Layout>
    </Section40>
  );
};

const MapBreakfast = () => {
  return Breakfast.map(({ item, description, price }) => {
    return (
      <>
        <GridItem c="col-span-4 md:col-span-8 lg:col-span-12">
          <GridItem c="col-span-4">
            <div className="mb-56">
              <h3 className="text-h4 text-dark mb-8">{item}</h3>
              <p className="mb-8">{description}</p>
              <span className="font-semibold">{price},-</span>
            </div>
          </GridItem>
        </GridItem>
      </>
    );
  });
};

{
  /* <h2 className="text-dark mb-32">Frokostfavoritter</h2> */
}

const MapDinner = () => {
  return Dinner.map(({ item, description, price }) => {
    return (
      <GridItem c="col-span-4">
        <div className="mb-56">
          <h3 className="text-h4 text-dark mb-8">{item}</h3>
          <p className="mb-8">{description}</p>
          <span className="font-semibold">{price},-</span>
        </div>
      </GridItem>
    );
  });
};

const MenuCategories = [
  { item: "FROKOST", index: "0" },
  { item: "MIDDAG", index: "1" },
  { item: "DRIKKE", index: "2" },
  { item: "BARNEMENY", index: "3" },
];
