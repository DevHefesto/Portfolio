import React from "react";
import Menu from "../../src/components/menu/Menu";
import {Presentation} from "../components/presentation/Presentation"

export default function Home() {
  return (
    <>
    <div className="bg-[url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[100vh] w-[100vw] bg-no-repeat bg-cover">
      <Menu />
      <Presentation />
    </div>
    </>
  );
}
