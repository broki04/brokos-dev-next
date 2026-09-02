"use client";

import dynamic from "next/dynamic";
import Loader from "../ui/Loader";

const ReviewsLazy = dynamic(() => import("../sections/Reviews"), {
  loading: () => <Loader />,
});

export default function Reviews() {
  return <ReviewsLazy />;
}
