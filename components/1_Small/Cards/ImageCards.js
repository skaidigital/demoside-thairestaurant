import Link from "next/link";
import { Bilde } from "../Base";

export const BgImageCardLarge = ({ src, text, h }) => {
  return (
    <div class="bg-gradient-to-t from-black to-white z-200">
      <div
        class={`relative z-1 h-340 lg:h-650 imgGradient dimmer-75 dimmer-100 flex items-end p-24 w-100 `}
      >
        <Link href="/meny">
          <a>
            <Bilde
              src={src}
              alt="Paneng curry"
              layout="fill"
              c="object-cover"
            />
          </a>
        </Link>
        <div class="relative z-1">{text}</div>
      </div>
    </div>
  );
};

export const BgImageCardSmall = ({ src, text, h }) => {
  return (
    <div
      class={`relative z-1 h-340 dimmer-75 dimmer-100 flex items-end p-24 w-100`}
    >
      <Link href="/meny">
        <a>
          <Bilde
            src={src}
            alt="Paneng curry"
            layout="fill"
            c="z-0 object-cover"
          />
        </a>
      </Link>
      <div class="relative z-1">{text}</div>
    </div>
  );
};
