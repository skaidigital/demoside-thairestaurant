import Link from "next/link";
import { useState } from "react";
import { Layout } from "../../1_Small/Base";

export const Mobilenav = () => {
  const [showMobilenav, setShowMobilenav] = useState(false);
  const openMobilenav = () => {
    setShowMobilenav((prev) => !prev);
  };

  return (
    <>
      {showMobilenav ? (
        <>
          <Layout>
            <div className="ml-24 my-24 bg-light mb-56 ">
              <header className="flex justify-between text-lys my-16 ">
                <div>
                  <Link href="/">
                    <a>
                      <p className="text-h3 font-semibold flex mb-0 self-center">
                        BANGKOK
                      </p>
                    </a>
                  </Link>
                </div>
                <div
                  className="strek"
                  onClick={() => setShowMobilenav(!showMobilenav)}
                ></div>
              </header>
              <ul className="mt-56">
                <Link href="/">
                  <li className="text-h1 font-semibold text-dark mt-16">
                    Hjem
                  </li>
                </Link>
                <Link href="/meny">
                  <li className="text-h1 font-semibold text-dark mt-16">
                    Menyen
                  </li>
                </Link>
                <Link href="/om-oss">
                  <li className="text-h1 font-semibold text-dark mt-16">
                    Om oss
                  </li>
                </Link>
                <Link href="/Kontakt">
                  <li className="text-h1 font-semibold text-dark mt-16">
                    Kontakt
                  </li>
                </Link>
                <Link href="#bookBord">
                  <li className="text-h1 font-semibold text-dark mt-16">
                    Book et bord
                  </li>
                </Link>
              </ul>
            </div>
          </Layout>
        </>
      ) : (
        <Layout>
          <div className="ml-24 bg-white flex justify-between my-24">
            <p className="text-h3 font-semibold flex mb-0 self-center">
              BANGKOK
            </p>

            <div
              className="strek"
              onClick={() => setShowMobilenav(!showMobilenav)}
            ></div>
          </div>
        </Layout>
      )}
    </>
  );
};
