"use client";

import dynamic from "next/dynamic";
import Loader from "../ui/Loader";

const Footer = dynamic(() => import("./Footer"), {
  loading: () => <Loader />,
});

export default function FooterLazy() {
  return <Footer />;
}
