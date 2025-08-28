"use client";

import dynamic from "next/dynamic";
import s from "./BackgroundDarkVeil.module.scss";

const DarkVeil = dynamic(() => import("@/lib/reactbits/DarkVeil/DarkVeil"), { ssr: false });

export default function BackgroundDarkVeil(){
  return (
    <div className={s.root} aria-hidden>
      <DarkVeil />
    </div>
  );
}