"use client";

import dynamic from "next/dynamic";
import Loader from "../ui/Loader";

const Skills = dynamic(() => import("./Skills"), {
  loading: () => <Loader />,
});

export default function SkillsLazy() {
  return <Skills />;
}
