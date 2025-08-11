import Head from "next/head";
import { InstagramLogo, TreasureChest } from "@phosphor-icons/react/ssr";

export default function Home() {
  //RETURN
  return (
    <>
      <Head>
        <title>SCNBH25</title>
      </Head>
      <div
        className="h-screen w-full flex justify-center items-center"
        style={{ backgroundColor: "var(--color-pink)" }}
      >
        <div className="h-screen w-full absolute bg-[url(/texture.png)] bg-cover bg-center" />
        <div className="h-screen w-full flex flex-col justify-center items-center gap-12 z-10">
          <img src="/elemento_concha.png" className="h-auto w-24" />
          <div
            className="text-8xl"
            style={{ color: "var(--color-blue-dark)", fontFamily: "PicNic" }}
          >
            Em breve
          </div>

          <div className="w-full flex justify-center items-center gap-4  z-10">
            <div
              id="insta"
              className="flex justify-center items-center gap-2 tempPage_menu_links"
              onClick={() =>
                window
                  .open(
                    "https://www.instagram.com/semana.cinemanegrobh/",
                    "_blank"
                  )
                  .focus()
              }
            >
              <InstagramLogo size={24} weight="fill" />
              <span className="text-1xl">Instagram</span>
            </div>
            <div
              id="past"
              className="flex justify-center items-center gap-2 tempPage_menu_links"
              onClick={() => window.open("/anteriores", "_self").focus()}
            >
              <span className="text-1xl">Edições anteriores</span>
            </div>
          </div>

          {/* <img
            src="/elemento_amarelo.png"
            className="h-screen w-auto absolute "
          /> */}
        </div>
      </div>
    </>
  );
}
