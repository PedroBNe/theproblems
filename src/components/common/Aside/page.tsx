import { Button } from "../../Button";
import { AsideItem } from "./AsideItem";
import Perfil from "@/assets/logo.png"

export const Aside = () => {
  return (
    <aside style={{ height: 'calc(100% - var(--header-height))' }} className="absolute left-0 overflow-auto w-48 scrollbar-thin border-white/15 border-solid border-r-[1px] py-4">
      <AsideItem image={Perfil} text="Página Inicial" link="/" />
      <AsideItem image={Perfil} text="Recentes" link="/" />
      <AsideItem image={Perfil} text="Novo" link="/" />
      <AsideItem image={Perfil} text="Trending" link="/" />
      <AsideItem image={Perfil} text="Atualizados" link="/" />
      <AsideItem image={Perfil} text="Problems" link="/" />
      <hr className="mx-4 my-4 border-white/15" />
      <AsideItem image={Perfil} text="Categoria1" link="/" />
      <AsideItem image={Perfil} text="Categoria2" link="/" />
      <AsideItem image={Perfil} text="Categoria3" link="/" />
      <AsideItem image={Perfil} text="Categoria4" link="/" />
      <AsideItem image={Perfil} text="Categoria5" link="/" />
      <AsideItem image={Perfil} text="Categoria6" link="/" />
      <AsideItem image={Perfil} text="Categoria7" link="/" />
      <AsideItem image={Perfil} text="Categoria8" link="/" />
      <AsideItem image={Perfil} text="Categoria9" link="/" />
      <AsideItem image={Perfil} text="Categoria10" link="/" />
      <AsideItem image={Perfil} text="Categoria11" link="/" />
      <AsideItem image={Perfil} text="Categoria12" link="/" />
      <AsideItem image={Perfil} text="Categoria13" link="/" />
      <AsideItem image={Perfil} text="Categoria14" link="/" />
      <AsideItem image={Perfil} text="Categoria15" link="/" />
      <AsideItem image={Perfil} text="Categoria16" link="/" />
      <AsideItem image={Perfil} text="Categoria16" link="/" />
      <AsideItem image={Perfil} text="Categoria16" link="/" />
      <hr className="mx-4 my-4 border-white/15" />
      <AsideItem image={Perfil} text="Tags" link="/" />
      <div className="mx-4 my-2">
        <Button text="Suporte" image={Perfil} />
      </div>
    </aside>
  );
}