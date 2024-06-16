"use client";
import React from "react";
const { SessionProvider } = require("next-auth/react");

export const NextAuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
