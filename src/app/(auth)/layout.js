import "../globals.scss";
import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Loading from "../components/views/loading";
import { poppins } from "../utils/fonts";
import { NextAuthProvider } from "../../context/SessionProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins}`}>
        <NextAuthProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </NextAuthProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.shape({}),
};
