import Link from "next/link";
import { Button } from "../../Button";
import { AsideItem } from "./AsideItem";
import Perfil from "@/assets/logo.png"
import { CATEGORY_GAME_MOCK } from "@/mocks/categoryGame";
import AppsAndSites from "@/components/footer-apps/page";

export const Aside = () => {
  return (
    <aside style={{ height: 'calc(100% - var(--header-height))' }} className="fixed left-0 top-0 mt-[var(--header-height)] overflow-auto w-52 scrollbar-thin border-white/15 border-solid border-r-[1px] py-4">
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
      <footer className="text-xs">&copy; 2024 Problems Games LTDA</footer>
    </aside>
  );
}