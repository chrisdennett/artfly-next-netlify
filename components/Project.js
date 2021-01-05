// Project was BlogPost, isProject was isBlogPost

import Head from "next/head";

export default function Project({ children, meta }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={meta.description}></meta>
        <title>{meta.title}</title>
      </Head>

      <h1>{meta.title}</h1>
      <div>
        <p>{meta.description}</p>
        <span>{meta.date}</span>
      </div>
      <h2>This is here</h2>
      <article>{children}</article>
    </>
  );
}
