import Head from "next/head";

export default function Home() {
  //RETURN
  return (
    <>
      <Head>
        <title>SCNBH25</title>
      </Head>
      <div className="h-screen w-full">
        <div
          className="top-0 w-full bg-top bg-cover"
          style={{
            height: "100vh",
            backgroundImage: `url('/semana_banner_home.png')`,
          }}
        />
      </div>
    </>
  );
}
