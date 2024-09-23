'use client'

import Search from "@/assets/search.svg"
import Friends from "@/assets/friends.svg"
import Saved from "@/assets/saved.svg"
import Profile from "@/assets/profile.svg"
import Notification from "@/assets/notification.svg"
import { IconButton } from "./IconButton"
import { InputForm } from "./InputForm"
import { Button } from "../../Button"
import OpenConfig from "@/assets/config-icon.svg"
import Clock from "@/assets/clock.svg"
import MyProfile from "@/assets/proflle-image.svg"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import AppsAndSites from "@/components/footer-apps/page"
import ConfigsPer from "./Configs-profile"
import PrefNot from "@/assets/pref-not.svg";
import Logo from "@/assets/logo.png"

export const Header = () => {

  const [isHiddenFav, setIsHiddenFav] = useState(false)
  const [isHiddenRec, setIsHiddenRec] = useState(true)
  const [isHiddenCur, setIsHiddenCur] = useState(true)

  const divRefFav = useRef<HTMLDivElement>(null);
  const divRefRec = useRef<HTMLDivElement>(null);
  const divRefCur = useRef<HTMLDivElement>(null);

  return (
    <header className="fixed top-0 w-full min-h-[var(--header-height)] max-h-[var(--header-height)] z-20">
      <nav className="flex row bg-[#212233] backdrop-blur-[8px] py-2 items-center justify-between">
        <div className="flex justify-center items-center ml-[8%]">
          <Link href="/">
            <Image src={Logo} alt="logo" width={100} height={100} />
          </Link>
        </div>
        <InputForm image={Search} alt="search" />
        <div className="flex row px-2 items-center justify-end mr-[4px]">
          <IconButton image={Friends} alt="Amigos" >
            <div className="h-[50%] justify-center items-center flex flex-col m-4 gap-8 text-xl">
              <h2 className="mt-7 text-3xl font-bold">Faca amigos!</h2>
              <p className="text-[#AAADBE]">Crie uma conta na The Problems.</p>
              <Link href="" ><Button text={"Registrar / Entrar"} /></Link>
            </div>
          </IconButton>
          <IconButton image={Notification} alt="Notificacoes" >
            <div className="h-[50%] justify-center items-center flex flex-col m-4 gap-8 text-xl">
              <button className="absolute top-0 left-0 m-3 w-fit rounded-full hover:opacity-70 transition"
              >
                <Image src={OpenConfig} alt="config-button" width={25} />
              </button>
              <Image src={Clock} alt='clock-icon' width={100} />
              <div className="justify-center items-center text-center m-4 text-[#AAADBE]">
                Nenhuma notificacao no momento...
              </div>
            </div>
          </IconButton>
          <IconButton image={Saved} alt="Salvos" >
            <div className="h-[50%] items-center flex flex-col m-4 text-lg text-[#AAADBE]">
              <ul className="w-full flex flex-row justify-around cursor-pointer">
                <li className={`${isHiddenFav ? 'border-transparent' : 'border-b-[#6842FF]'} border-4 border-transparent hover:opacity-60 transition relative`}
                  onClick={() => {
                    setIsHiddenFav(false)
                    setIsHiddenRec(true)
                    setIsHiddenCur(true)
                  }}
                >
                  Favoritos
                </li>
                <li className={`${isHiddenRec ? 'border-transparent' : 'border-b-[#6842FF]'} border-4 border-transparent hover:opacity-60 transition relative`}
                  onClick={() => {
                    setIsHiddenFav(true)
                    setIsHiddenRec(false)
                    setIsHiddenCur(true)
                  }}
                >
                  Recentes
                </li>
                <li className={`${isHiddenCur ? 'border-transparent' : 'border-b-[#6842FF]'} border-4 border-transparent hover:opacity-60 transition relative`}
                  onClick={() => {
                    setIsHiddenFav(true)
                    setIsHiddenRec(true)
                    setIsHiddenCur(false)
                  }}
                >
                  Curtidos
                </li>
              </ul>
              <hr className="border-1 w-full rounded-full border-[#AAADBE]" />
              <div className="w-full flex justify-center mt-4 mx-2">
                {!isHiddenFav && (
                  <div className="absolute w-[95%] min-h-[40em] bg-[#212233] flex flex-col items-center gap-3" ref={divRefFav}>
                    <div className="w-full min-h-[10vh] flex rounded-lg items-center justify-center">
                      <Link href=''><Button text="Registrar-se / Entrar" /></Link>
                    </div>
                  </div>
                )}
                {!isHiddenRec && (
                  <div className="absolute w-[95%] min-h-[40em] bg-[#212233] flex flex-col items-center gap-3" ref={divRefRec}>
                    <div className="w-full min-h-[10vh] bg-[#373952] flex rounded-lg items-center justify-center">
                      Jogos
                    </div>
                  </div>
                )}
                {!isHiddenCur && (
                  <div className="absolute w-[95%] min-h-[40em] bg-[#212233] flex flex-col items-center" ref={divRefCur}>
                    <div className="w-full min-h-[10vh] flex rounded-lg items-center justify-center">
                      <Link href=''><Button text="Registrar-se / Entrar" /></Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </IconButton>
          <IconButton image={Profile} alt="Perfil" >
            <div className="min-h-[50%] justify-center items-center flex flex-col m-4 gap-8 text-base text-[#AAADBE]">
              <div className="w-full flex flex-col items-center">
                <Image src={MyProfile} alt='perfil' width={150} />
                <p>@SeuPerfil</p>
              </div>
              <ConfigsPer />
              <hr className="border-1 w-full rounded-full border-[#AAADBE]" />
              <div className="w-full flex pl-4 gap-2">
                <Image src={PrefNot} alt='config-profile-icon' width={15} />
                <Link href="" target="_blank" className="hover:opacity-50 transition">Suporte</Link>
              </div>
              <hr className="border-1 w-full rounded-full border-[#AAADBE]" />
              <div className="w-full flex">
                <AppsAndSites />
              </div>
            </div>
          </IconButton>
          <div>
            <Button text="Entrar" />
          </div>
        </div>
      </nav>
    </header >
  );
};
