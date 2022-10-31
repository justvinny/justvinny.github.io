import NavBar from "./navbar";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>Vinson Beduya&apos;s Portfolio</title>
      <meta charSet="UTF-8" />
      <meta name="author" content="Vinson Beduya" />
      <meta
        name="description"
        content="This is a porfolio site built with Next JS by Vinson Beduya."
      />
      <meta
        name="keywords"
        content="HTML, CSS, TypeScript, JavaScript, NextJS, React, Web Portfolio, Portfolio, Computer Science, Web Development, Android Development, Android, Software Developer, Software Engineer"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <NavBar />
    {children}
  </>
);

export default Layout;
