import { Layout } from "../1_Small/Base";

export const Header = () => {
  return (
    <header className="bg-primary">
      <Layout>
        <div className="flex flex-col lg:flex-row justify-end text-label text-white py-8">
          <div className="lg:ml-32 flex">
            <p className="mb-0">Henrik Ibsens gate 100, 0255 Oslo</p>
          </div>
          <div className="my-8 md:my-0 lg:ml-32 flex">
            <a
              className="font-semibold mb-0 hover:underline focus:underline"
              href=""
            >
              Finn restauranten
            </a>{" "}
            <div className="ml-4 flex self-center">{map}</div>
          </div>
          <div className="lg:ml-32 flex">
            <a
              href="tel:"
              className="flex justify-middle mb-0 hover:underline focus:underline"
            >
              Telefon: <span className="font-semibold">(+47) 973 46 533</span>
            </a>
            <div className="flex ml-8 flex self-center">{phone}</div>
          </div>
        </div>
      </Layout>
    </header>
  );
};

const map = (
  <svg
    height="16"
    width="16"
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
      fill="#ffffff"
      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
    ></path>
  </svg>
);
const phone = (
  <svg
    height="16"
    width="16"
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
      fill="#ffffff"
      d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"
    ></path>
  </svg>
);
