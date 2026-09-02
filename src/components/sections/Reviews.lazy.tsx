"use client";

import dynamic from "next/dynamic";
import Loader from "../ui/Loader";

const Reviews = dynamic(() => import("../sections/Reviews"), {
  loading: () => <Loader />,
});

export default function ReviewsLazy() {
  return <Reviews />;
}
