import Link from "next/link";
import { Layout } from "../../1_Small/Base";
import { PrimaryButton } from "../../1_Small/Buttons";

export const Desktopnav = () => {
  return (
    <Layout>
      <div className="flex justify-between bg-white my-24">
        <div class="self-center ">
          <Link href="/">
            <a>
              <p className="text-h3 font-semibold flex mb-0 ">BANGKOK</p>
            </a>
          </Link>
        </div>
        <div className="text-label text-dark font-medium flex self-center">
          <Link href="/">
            <a className="ml-32 mb-0 nav nav">Hjem</a>
          </Link>
          <Link href="/meny">
            <a className="ml-32 mb-0 nav">Menyen</a>
          </Link>
          <Link href="/om-oss">
            <a className="ml-32 mb-0 nav">Om oss</a>
          </Link>
          <Link href="/kontakt">
            <a className="ml-32 mb-0 nav">Kontakt</a>
          </Link>
        </div>
        <PrimaryButton
          btnText="BOOK ET BORD"
          href=""
          bgColor="primary"
          txtColor="white"
          c="mb-0 nav"
        />
      </div>
    </Layout>
  );
};
