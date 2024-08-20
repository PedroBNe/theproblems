import Lupa from "@/assets/lupa.png"
import Amigos from "@/assets/amigos.png"
import Salvos from "@/assets/salvos.png"
import Perfil from "@/assets/perfil.png"
import Sino from "@/assets/sino.png"
import './index.css'
import { IconButton } from "./IconButton"
import { InputForm } from "./InputForm"
import { TabMenu } from "./TabMenu"
import { SignInButton } from "./SignInButton"

export const Header = () => {
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-tab">
          <TabMenu />
        </div>
        <InputForm image={Lupa} alt="lupa"/>
        <div className="nav-items gap-4">
          <IconButton image={Amigos} alt="amigos" />
          <IconButton image={Sino} alt="sino" />
          <IconButton image={Salvos} alt="salvos" />
          <IconButton image={Perfil} alt="perfil" />
          <SignInButton />
        </div>
      </nav>
    </header>
  );
};