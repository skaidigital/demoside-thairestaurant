export const FiveStarsRegular = () => {
  return (
    <div class="flex self-center mb-2">
      {StarRegular}
      {StarRegular}
      {StarRegular}
      {StarRegular}
      {StarRegular}
    </div>
  );
};

export const FiveStarsSmall = () => {
  return (
    <div class="flex">
      {StarSmall}
      {StarSmall}
      {StarSmall}
      {StarSmall}
      {StarSmall}
    </div>
  );
};

export const RatingsTripadivsor = ({ rating, amount }) => {
  return (
    <div class="flex flex-col items-center md:flex-row">
      <div class="flex self-center mr-8">{TripAdivsor}</div>
      <div class="flex">{FiveStarsRegular()}</div>
      <div>
        <span className="text-h5 flex self-center text-darkVar md:text-h4 flex flex-row font-medium ml-8">
          <div>{rating}</div> <div> ({amount})</div>
        </span>
      </div>
    </div>
  );
};

export const RatingsGoogle = ({ rating, amount }) => {
  return (
    <div class="flex flex-col md:flex-row">
      <div class="flex self-center mr-8">{Google}</div>
      <div class="flex">
        {FiveStarsRegular()}
        <div className="text-h5 text-darkVar flex self-center md:text-h4 flex font-medium ml-8">
          <div>{rating}</div> <div> ({amount})</div>
        </div>
      </div>
    </div>
  );
};

const TripAdivsor = (
  <svg
    height="32"
    id="US_CTM_"
    data-name="US (CTM)"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 37.9675"
  >
    <defs></defs>
    <title>TA_logo_newGreen_primary</title>
    <path
      fill="#84848B"
      class="cls-1"
      d="M8.69853,6.34985C13.42485,5.74015,26.834,5.32015,23.16029,24.69632l4.16692-.339C25.50191,12.41381,29.31986,6.324,41.25838,5.74015,21.45779-5.22456,10.18426,6.15809,8.69853,6.34985Z"
    />
    <path
      fill="#ffffff"
      class="cls-2"
      d="M27.13191,21.62794A11.34312,11.34312,0,1,0,33.84147,7.055,11.347,11.347,0,0,0,27.13191,21.62794Z"
    />
    <circle
      fill="#ffffff"
      class="cls-2"
      cx="12.62599"
      cy="17.65102"
      r="11.34537"
    />
    <circle
      fill="#ffffff"
      class="cls-3"
      cx="12.4632"
      cy="17.53993"
      r="2.0971"
    />
    <circle
      fill="#ffffff"
      class="cls-4"
      cx="37.74486"
      cy="17.53993"
      r="2.09618"
    />
    <path
      fill="#84848B"
      d="M47.89824,10.18a16.25082,16.25082,0,0,1,2.48088-5.0444l-8.41926-.00647A30.65918,30.65918,0,0,0,25.14368.461,31.36745,31.36745,0,0,0,7.90015,5.18868L0,5.19309a16.3389,16.3389,0,0,1,2.46941,5.00044A12.60265,12.60265,0,0,0,22.46235,25.53426L25.14721,29.554l2.71074-4.05353A12.61369,12.61369,0,0,0,47.89824,10.18ZM37.37,5.094A12.57259,12.57259,0,0,0,25.19676,16.73368,12.6202,12.6202,0,0,0,12.87912,5.04515,31.17654,31.17654,0,0,1,25.14368,2.66044,29.67419,29.67419,0,0,1,37.37,5.094ZM12.62632,27.71926A10.06971,10.06971,0,1,1,22.695,17.652,10.08062,10.08062,0,0,1,12.62632,27.71926Zm28.63412-.57147a10.07577,10.07577,0,0,1-12.93515-5.96V21.185A10.07008,10.07008,0,1,1,41.26044,27.14779Z"
    />
    <path
      fill="#84848B"
      d="M12.47059,11.3094a6.231,6.231,0,1,0,6.22191,6.23A6.24029,6.24029,0,0,0,12.47059,11.3094Zm0,10.31575a4.08509,4.08509,0,1,1,4.07706-4.08574A4.09513,4.09513,0,0,1,12.47059,21.62515Z"
    />
    <path
      fill="#84848B"
      d="M37.74486,11.3094a6.231,6.231,0,1,0,6.22779,6.23A6.23822,6.23822,0,0,0,37.74486,11.3094Zm0,10.31575a4.08508,4.08508,0,1,1,4.08367-4.08574A4.091,4.091,0,0,1,37.74486,21.62515Z"
    />
    <path
      fill="#84848B"
      class="cls-4"
      d="M178.92853,3.71234a2.42882,2.42882,0,1,0,2.42912-2.43057A2.43229,2.43229,0,0,0,178.92853,3.71234Z"
    />
    <path
      fill="#84848B"
      d="M63.56706,3.54368L59.88765,4.81176V9.61765H55.80618v3.22206H59.77V23.18338c0,4.92368,1.67941,6.92926,5.791,6.92926a11.51784,11.51784,0,0,0,3.04176-.39926l0.16088-.04382-0.04529-3.33618-0.28368.09912a6.05648,6.05648,0,0,1-1.93074.42221c-1.93088,0-2.64971-1.09132-2.64971-4.02472V12.83971h4.71118V9.61765H63.85426V3.44456Z"
    />
    <path
      fill="#84848B"
      d="M76.30118,12.88059V9.61765h-3.731V29.76147h4.08279V19.64971c0-4.24088,1.77868-6.57529,5.00779-6.57529a5.17342,5.17342,0,0,1,1.47059.22763l0.26779,0.07545,0.13221-3.97882-1.755-.13426A6.006,6.006,0,0,0,76.30118,12.88059Z"
    />
    <path
      fill="#84848B"
      d="M105.44941,9.14588A7.81777,7.81777,0,0,0,98.719,12.88926V9.61765H94.98721V37.9675h4.085V26.97544a7.41651,7.41651,0,0,0,6.22279,3.09691c5.16426,0,8.49971-4.22926,8.49971-10.77588C113.79471,13.22456,110.44206,9.14588,105.44941,9.14588Zm-1.136,17.62912c-3.23132,0-5.24118-2.76015-5.24118-7.205,0-4.28029,2.11971-7.04632,5.39838-7.04632,3.1581,0,5.04294,2.61955,5.04294,7.009C109.51353,24.00044,107.521,26.775,104.31338,26.775Z"
    />
    <path
      fill="#84848B"
      class="cls-4"
      d="M125.72735,9.14588a15.09353,15.09353,0,0,0-6.68868,1.43618l-0.12632.05882,0.04588,3.48632,0.31809-.1781a11.17064,11.17064,0,0,1,5.39118-1.62072c2.95632,0,4.65162,1.69529,4.65162,4.65235v0.17309h-2.33441c-6.72324,0-10.42412,2.43485-10.42412,6.85529,0,3.54721,2.66912,6.02588,6.49632,6.02588a7.71159,7.71159,0,0,0,6.53574-3.18676v2.91324h3.69456V17.56735C133.28721,11.97941,130.74515,9.14588,125.72735,9.14588ZM129.31912,21.259c0,3.47249-2.08735,5.71147-5.32088,5.71147a3.12047,3.12047,0,0,1-3.35544-3.16029c0-2.44279,2.33515-3.78706,6.576-3.78706h2.10029V21.259Z"
    />
    <path
      fill="#84848B"
      class="cls-4"
      d="M150.63765,0V12.352a7.36679,7.36679,0,0,0-6.301-3.20616c-4.98971,0-8.34162,4.111-8.34162,10.22809,0,6.30029,3.39706,10.69838,8.26412,10.69838a7.50512,7.50512,0,0,0,6.6931-3.76044v3.44956h3.77117V0h-4.08574Zm-5.31647,26.69529c-3.11279,0-5.04662-2.71426-5.04662-7.085,0-4.3759,1.95029-7.20368,4.96618-7.20368,3.3806,0,5.39691,2.69353,5.39691,7.20368C150.63765,23.915,148.55029,26.69529,145.32118,26.69529Z"
    />
    <path
      fill="#84848B"
      class="cls-4"
      d="M172.975,9.61765l-5.79544,11.62544L161.82868,9.61765h-4.60354l9.87266,20.14382L177.239,9.61765h-4.264Z"
    />
    <path
      fill="#84848B"
      class="cls-4"
      d="M183.19088,9.61765h-3.86955V29.76147h4.08646V9.61765h-0.21691Z"
    />
    <path
      fill="#84848B"
      class="cls-4"
      d="M188.19574,14.78206c0,2.83559,1.94824,4.32691,5.53985,6.08118,2.26765,1.11515,3.45324,1.77,3.45324,3.34118,0,1.60706-1.45838,2.65029-3.71161,2.65029a11.851,11.851,0,0,1-5.12633-1.31544l-0.29941-.145L187.915,28.94294l0.14294,0.05809a14.30313,14.30313,0,0,0,5.26265.99456c4.99559,0,8.22471-2.38044,8.22471-6.06618,0-3.07471-2.04574-4.63074-5.58221-6.28382-2.59588-1.21426-3.68146-1.92941-3.68146-3.21765,0-1.22926,1.20778-2.02132,3.079-2.02132a11.32021,11.32021,0,0,1,4.89426,1.11809l0.29162,0.13926,0.18529-3.479-0.16515-.05029a17.62676,17.62676,0,0,0-4.96971-.75325C191.17,9.38146,188.19574,11.55074,188.19574,14.78206Z"
    />
    <path
      fill="#84848B"
      class="cls-4"
      d="M214.28368,9.14588c-6.13868,0-9.95162,4.03985-9.95162,10.54338s3.81294,10.544,9.95162,10.544c6.16456,0,9.99544-4.04059,9.99544-10.544S220.44824,9.14588,214.28368,9.14588Zm0.03941,17.74838c-3.39059,0-5.67191-2.91324-5.67191-7.24456,0-4.35426,2.28132-7.28176,5.67191-7.28176,3.44825,0,5.67485,2.85632,5.67485,7.28176C219.99794,24.05,217.77133,26.89426,214.32309,26.89426Z"
    />
    <path
      fill="#84848B"
      class="cls-4"
      d="M231.81515,12.88059V9.61765h-3.72971V29.76147h4.083V19.64971c0-4.24088,1.78072-6.57529,5.00631-6.57529a5.14678,5.14678,0,0,1,1.47059.22763l0.26853,0.07545,0.13353-3.97882-1.75559-.13426A6.00967,6.00967,0,0,0,231.81515,12.88059Z"
    />
    <path
      d="M90.81176,9.61765H86.94132V29.76147h4.08647V9.61765h-0.216Z"
      fill="#84848B"
    />
    <path
      fill="#84848B"
      d="M86.54721,3.71234a2.42956,2.42956,0,1,0,2.42985-2.43057A2.43377,2.43377,0,0,0,86.54721,3.71234Z"
    />
    <g class="cls-5">
      <path
        fill="#84848B"
        class="cls-4"
        d="M248.979,6.77132A3.57822,3.57822,0,0,1,250,9.32338a3.51344,3.51344,0,0,1-1.08147,2.58926,3.70113,3.70113,0,0,1-2.57059,1.06206,3.57369,3.57369,0,0,1-2.59074-1.11162,3.61641,3.61641,0,0,1-1.04911-2.53971A3.68563,3.68563,0,0,1,243.816,6.70029a3.54154,3.54154,0,0,1,2.53191-1.03118A3.59428,3.59428,0,0,1,248.979,6.77132Zm-4.70118.4a3.01908,3.01908,0,0,0-.89838,2.15206,3.0017,3.0017,0,0,0,2.96853,2.97912,3.03267,3.03267,0,0,0,2.1125-.85941,3.00675,3.00675,0,0,0,.03883-4.21221,2.949,2.949,0,0,0-2.13913-.90118A2.89011,2.89011,0,0,0,244.27779,7.17132Zm2.1406,0.06882c1.151,0,1.73117.41147,1.73117,1.16118a1.0949,1.0949,0,0,1-.85015,1.08147l0.889,1.75912h-1.20853l-0.75117-1.589h-0.32163v1.589h-1.09868V7.24015h1.61Zm-0.51133,1.76147h0.39279c0.47971,0,.71882-0.17016.71882-0.51985,0-.38926-0.25-0.54926-0.77912-0.54926h-0.3325V9.00162Z"
      />
    </g>
  </svg>
);

const Google = (
  <svg
    width="136"
    height="56"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-0.446 -22.19 300 133.14"
  >
    <path
      d="M115.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      fill="#84848B"
    />
    <path
      d="M163.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      fill="#84848B"
    />
    <path
      d="M209.39 25.87v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
      fill="#84848B"
    />
    <path d="M224.64 2.53v65h-9.5v-65z" fill="#84848B" />
    <path
      d="M261.66 54.01l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
      fill="#84848B"
    />
    <path
      d="M34.93 40.94v-9.41h31.71c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C15.96 68.88 0 53.42 0 34.44 0 15.46 15.96 0 34.94 0c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65z"
      fill="#84848B"
    />
  </svg>
);

const StarRegular = (
  <svg
    height="32"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="star"
    class="svg-inline--fa fa-star fa-w-18"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="#84848B"
      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
    ></path>
  </svg>
);

const StarSmall = (
  <svg
    height="24"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="star"
    class="svg-inline--fa fa-star fa-w-18"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="#FFCC00"
      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
    ></path>
  </svg>
);
