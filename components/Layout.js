import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>

      <Header />

      <section className="layout">
        <div className="content">{children}</div>
      </section>

      <br />
      <hr />

      <footer>
        Time for a cup of water... or whatever beverage you prefer, at the
        moment.
      </footer>
    </>
  );
}
