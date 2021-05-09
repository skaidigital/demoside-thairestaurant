import Link from "next/link";
import { Grid, GridItem, Layout, SectionContainer } from "../../1_Small/Base";

const Navigasjon = [
  { navn: "Hjemmeside", href: "/" },
  { navn: "Meny", href: "/meny" },
  { navn: "Bestill bord", href: "/bestill-bord" },
  { navn: "Om oss", href: "/om-oss" },
  { navn: "Kontakt", href: "/kontakt" },
];

export const Footer = () => {
  return (
    <footer className="bg-lightVar">
      <SectionContainer id="footer">
        <Layout>
          <Grid>
            <GridItem c="col-span-4 lg:col-span-3">
              <h2 className="mb-16 text-dark">Bangkok Restaurant</h2>
              <p className="mr-12">
                Bangkok restaurant er en familiedrevet thairestaurant som elsker
                å lage god mat. Kom og besøk oss!
              </p>
            </GridItem>
            <GridItem c="col-span-4">
              <h2 className="mb-16 text-dark text-h5 font-bold">KONTAKT OSS</h2>
              <div class="mb-16 flex">
                <div class="flex self-center">{email}</div>
                <a href="mailto:" className="ml-8 mb-0">
                  kontakt@bangkokrestauranten.no
                </a>
              </div>
              <div class="mb-16 flex">
                <div class="flex self-center">{map}</div>
                <a href="" className="ml-8 mb-0">
                  Henrik Ibsens gate 100, 0255 Oslo
                </a>
              </div>
              <div class="mb-16 flex">
                <div class="flex self-center">{phone}</div>
                <a href="tel:" className="ml-8 mb-0">
                  (+47) 972 45 334
                </a>
              </div>
            </GridItem>
            <GridItem c="col-span-4 lg:col-span-2">
              <h2 className="mb-16 text-dark text-h5 font-bold">NAVIGASJON</h2>
              <div class="flex flex-col">
                <Link href="/">
                  <a className="mb-16">Hjemmeside</a>
                </Link>
                <Link href="/meny">
                  <a className="mb-16">Meny</a>
                </Link>
                <Link href="#bestillBord">
                  <a className="mb-16">Bestill bord</a>
                </Link>
                <Link href="/om-oss">
                  <a className="mb-16">Om oss</a>
                </Link>
                <Link href="/kontakt">
                  <a className="mb-16">Kontakt</a>
                </Link>
              </div>
            </GridItem>
            <GridItem c="col-span-4 lg:col-span-3">
              <h2 className="mb-16 text-dark text-h5 font-bold">
                ÅPNINGSTIDER
              </h2>
              <p className="mb-16 flex md:flex-col xl:flex-row">
                <div> Mandag - Fredag </div>{" "}
                <div className="xl:ml-8"> 15:00 - 22:00</div>
              </p>
              <p className="mb-16 flex md:flex-col xl:flex-row">
                <div> Lødag </div> <div className="xl:ml-8"> 13:00 - 22:00</div>
              </p>
              <p className="mb-16 flex md:flex-col xl:flex-row">
                <div> Søndag </div> <div className="xl:ml-8"> Stengt</div>
              </p>
              <p className="mb-16 flex md:flex-col xl:flex-row">
                Kjøkkenet stenger 30 minutter før!
              </p>
            </GridItem>
          </Grid>
        </Layout>
      </SectionContainer>
    </footer>
  );
};

const email = (
  <svg
    height="24"
    width="24"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="envelope-open-text"
    class="svg-inline--fa fa-envelope-open-text fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="#444444"
      d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"
    ></path>
  </svg>
);
const map = (
  <svg
    height="24"
    width="24"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="map-marker-alt"
    class="svg-inline--fa fa-map-marker-alt fa-w-12"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
  >
    <path
      fill="#444444"
      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
    ></path>
  </svg>
);
const phone = (
  <svg
    height="24"
    width="24"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="phone-square"
    class="svg-inline--fa fa-phone-square fa-w-14"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="#444444"
      d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"
    ></path>
  </svg>
);
