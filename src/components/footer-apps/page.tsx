import { Sites } from "./Sites";
import Youtube from "@/assets/youtube.svg"
import PlayStore from "@/assets/playstore.svg"
import Tiktok from "@/assets/tiktok.svg"
import Instagram from "@/assets/instagram.svg"
import Link from "next/link";

export default function AppsAndSites() {
    return(
      <div>
        <div className="mx-4 my-2 flex flex-col gap-1 text-sm">
          <Link href="https://turmadoproblems.com.br/" target="_blank" className="hover:opacity-50 transition">
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
      </div>
    )
}
