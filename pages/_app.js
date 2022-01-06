import React from "react";
import App from "next/app";
import Head from "next/head";
import "assets/css/styles.css";

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        const Layout = Component.layout || (({ children }) => <>{children}</>);

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <title>Billy.</title>
                </Head>
                <Layout className="Iamla">
                    <Component {...pageProps} />
                </Layout>
            </>
        );
    }
}
