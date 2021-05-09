import Link from "next/link";

export const PrimaryButton = ({ href, btnText, c, bgColor, txtColor }) => {
  return (
    <Link href={href}>
      <a
        className={`${c} textDeco text-center text-label text-${txtColor} font-semibold py-16 px-32 border-${bgColor} bg-${bgColor} hover:bg-${bgColor}Var`}
      >
        {btnText}
      </a>
    </Link>
  );
};

export const SecondaryButton = ({ href, btnText, c, bgColor, txtColor }) => {
  return (
    <Link href={href}>
      <a
        className={`${c} w-100 text-center textDeco md:w-auto text-label text-${txtColor} font-semibold py-16 px-32   bg-${bgColor} hover-bg-${bgColor}Var`}
      >
        {btnText}
      </a>
    </Link>
  );
};
