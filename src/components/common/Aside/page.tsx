import Link from "next/link";
import { Button } from "../../Button";
import { AsideItem } from "./AsideItem";
import Perfil from "@/assets/logo.png"
import { CATEGORY_GAME_MOCK } from "@/mocks/categoryGame";
import { Sites } from "./Sites";
import Youtube from "@/assets/youtube.svg"
import PlayStore from "@/assets/playstore.svg"
import Tiktok from "@/assets/tiktok.svg"
import Instagram from "@/assets/instagram.svg"

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
      <div className="mx-4 my-2 flex flex-col gap-1 text-sm">
        <Link href="https://turmadoproblems.com.br/" target="_blank" className="hover:opacity-50">
          Sobre
        </Link>
        <Link href="termos-e-condicoes" className="hover:opacity-50">
          Termos e Condições
        </Link>
        <Link href="politica-de-privacidade" className="hover:opacity-50">
          Politica de Privacidade
        </Link>
      </div>
      <div className="mx-4 my-4 flex flex-row gap-2 justify-between">
        <Link href="https://www.youtube.com/@problemsyt" target="_blank"><Sites image={Youtube} alt="youtube"/></Link>
        <Link href="https://play.google.com/store/apps/dev?id=6037234413216781861" target="_blank"><Sites image={PlayStore} alt="playstore"/></Link>
        <Link href="https://www.instagram.com/problems_sr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><Sites image={Instagram} alt="instagram"/></Link>
        <Link href="https://www.tiktok.com/@problemssr?is_from_webapp=1&sender_device=pc" target="_blank"><Sites image={Tiktok} alt="tiktok"/></Link>
      </div>
      <footer className="">&copy; 2024 Problems Games LTDA</footer>
    </aside>
  );
}