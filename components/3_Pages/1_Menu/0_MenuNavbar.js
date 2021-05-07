import Link from "next/link";
import { useState } from "react";
import { Grid, GridItem, Layout, Section80 } from "../../1_Small/Base";

export const MenuNavbar = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <Section80 id="menu-nav">
      <Layout>
        <Grid>
          <GridItem c="col-span-4 md:col-span-8 lg:col-span-12">
            <div class="flex flex-wrap">
              {MenuCategories.map((i) => {
                return (
                  <Link href="">
                    <a
                      onClick={() => toggleTab(index)}
                      className={"mr-56 text-h4 font-semibold"}
                    >
                      {i}
                    </a>
                  </Link>
                );
              })}
            </div>
          </GridItem>
        </Grid>
      </Layout>
    </Section80>
  );
};

const MenuCategories = [
  "FROKOST",
  "MIDDAG",
  "BARNEMENY",
  "DRIKKE",
  "BARNEMENY",
  "DRIKKE",
];
