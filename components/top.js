import Head from "next/head";
import Nav from "./nav";

export default function Top({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
    </>
  );
}
