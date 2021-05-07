import Link from "next/link";
import { Bilde } from "../Base";

export const BgImageCardLarge = ({ src, text, h }) => {
  return (
    <div
      class={`relative z-1 h-340 lg:h-650 dimmer-33 dimmer0  flex items-end p-24 w-100`}
    >
      <Link href="/meny">
        <a>
          <Bilde
            src={src}
            alt="Paneng curry"
            layout="fill"
            c="z-0 object-cover dimmer-50"
          />
        </a>
      </Link>
      <div class="relative z-1">{text}</div>
    </div>
  );
};

export const BgImageCardSmall = ({ src, text, h }) => {
  return (
    <div
      class={`relative z-1 h-340 dimmer-33 dimmer0  flex items-end p-24 w-100`}
    >
      <Link href="/meny">
        <a>
          <Bilde
            src={src}
            alt="Paneng curry"
            layout="fill"
            c="z-0 object-cover dimmer-50"
          />
        </a>
      </Link>
      <div class="relative z-1">{text}</div>
    </div>
  );
};
