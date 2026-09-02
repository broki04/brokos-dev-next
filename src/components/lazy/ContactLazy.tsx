"use client";

import dynamic from "next/dynamic";
import Loader from "../ui/Loader";

const Contact = dynamic(() => import("../sections/Contact"), {
  loading: () => <Loader />,
  ssr: false,
});

export default function ContactLazy() {
  return <Contact />;
}
