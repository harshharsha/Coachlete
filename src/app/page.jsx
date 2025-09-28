"use client";

import Homesection from "@/pages/HomeSection/Homesection";
import Info from "@/pages/Info/Info";
import DotMenu from "@/pages/DotMenu/DotMenu";
import NavBar from "@/pages/NavBar/NavBar";
import { useState } from "react";
import Blogs from "@/pages/Blogs/Blogs";

export default function Home() {
  const [openDot, setOpenDot] = useState(false);

  return (
    <main>
      <NavBar setOpenDot={setOpenDot} openDot={openDot} />
      <DotMenu setOpenDot={setOpenDot} openDot={openDot} />
      <Homesection />
      <Info />
      <Blogs />
    </main>
  );
}
