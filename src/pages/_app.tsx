import Head from "next/head";
import Router from "next/router";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import defaultSeoConfig from "../../next-seo.config";
import Layout from "components/layout";
import "styles/globals.css";

import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import NProgress from "nprogress";
import "@fontsource/poppins";

import "nprogress/nprogress.css";

// show spinner while route is loading
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, maximum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <ThemeProvider defaultTheme="system" attribute="class">
        <DefaultSeo {...defaultSeoConfig} />
        <SessionProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
