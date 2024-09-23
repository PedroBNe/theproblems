'use client'

import Link from "next/link";
import { Button } from "../../Button";
import { AsideItem } from "./AsideItem";
import Perfil from "@/assets/logo.png"
import { CATEGORY_GAME_MOCK } from "@/mocks/categoryGame";
import AppsAndSites from "@/components/footer-apps/page";
import { useState } from "react";
import Image from "next/image";
import ExpandsLeft from "@/assets/expands-left.svg"
import ExpandsRight from "@/assets/expands-right.svg"

export const Aside = () => {
  const [ ishidden, setIsHidden ] = useState(true);

  return (
    <aside className={`relative`}>
      <button onClick={() => { setIsHidden(!ishidden) }}>
        {ishidden || (
          <Image src={ExpandsRight} alt="open" width={35} height={35} className="fixed left-5 top-3 z-20"/> // Open Aside
        )}
        {ishidden && (
          <Image src={ExpandsLeft} alt="close" width={35} height={35} className="fixed left-5 top-3 z-20"/> // Close Aside
        )}
      </button>
      {ishidden && (
        <div className="fixed z-20 left-0 top-0 mt-[var(--header-height)] overflow-auto w-56 h-[95vh] scrollbar-thin bg-[#212233] border-white/15 border-solid border-r-[1px] py-4">
          <AsideItem image={Perfil} text="Página Inicial" link="/" />
          <AsideItem image={Perfil} text="Recentes" link="/" />
          <AsideItem image={Perfil} text="Novo" link="/" />
          <AsideItem image={Perfil} text="Trending" link="/" />
          <AsideItem image={Perfil} text="Atualizados" link="/" />
          <AsideItem image={Perfil} text="Problems" link="/" />
          <hr className="mx-4 my-4 border-white/15" />
          {CATEGORY_GAME_MOCK.map((category) => (
            <AsideItem key={category.id} image={Perfil} text={category.name} link="/" />
          ))}
          <hr className="mx-4 my-4 border-white/15" />
          <AsideItem image={Perfil} text="Tags" link="/" />
          <div className="mx-4 my-2">
            <Button text="Suporte" image={Perfil} />
          </div>
          <hr className="mx-4 my-4 border-white/15" />
          <AppsAndSites />
          <footer className="w-full p-2 mb-2 text-xs flex justify-center items-center">&copy; 2024 Problems Games LTDA</footer>
        </div>
      )}
    </aside>
  );
}
