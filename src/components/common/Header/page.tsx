import Image from "next/image"
import Logo from "@/assets/logo.png"
import Lupa from "@/assets/lupa.png"
import Amigos from "@/assets/amigos.png"
import Salvos from "@/assets/salvos.png"
import Perfil from "@/assets/perfil.png"
import Sino from "@/assets/sino.png"
import Menu from "@/assets/menu.png"
import './index.css'

export const Header = () => {
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-tab">
          <button className="games-tab">
            <Image src={Menu} alt="abre" width={30} height={30} />
          </button>
          <div>
            <Image src={Logo} alt="logo" width={100} height={100} />
          </div>
        </div>
        <form className="input-bar">
          <input placeholder="Search" className="input"></input>
          <div className="lupa">
            <Image src={Lupa} alt={"lupa"} width={20} height={20} />  
          </div>
        </form>
        <div className="nav-items">
          <div className="amigos">
            <Image src={Amigos} alt={"amigos"} width={25} height={25} />
          </div>
          <div className="sino">
            <Image src={Sino} alt={"sino"} width={25} height={25} />
          </div>
          <div className="salvos">
            <Image src={Salvos} alt={"salvos"} width={25} height={25} />
          </div>
          <div className="perfil">
            <Image src={Perfil} alt={"perfil"} width={25} height={25} />
          </div>
        </div>
      </nav>
    </header>
  )
}