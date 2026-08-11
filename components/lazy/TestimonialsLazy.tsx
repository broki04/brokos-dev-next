"use client";

import dynamic from "next/dynamic";
import Loader from "../ui/Loader";

const TestimonialsLazy = dynamic(() => import("../sections/Testimonials"), {
  loading: () => <Loader />,
});

export default function Testimonials() {
  return <TestimonialsLazy />;
}
