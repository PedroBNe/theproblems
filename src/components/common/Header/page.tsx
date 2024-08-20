import Lupa from "@/assets/lupa.png"
import Amigos from "@/assets/amigos.png"
import Salvos from "@/assets/salvos.png"
import Perfil from "@/assets/perfil.png"
import Sino from "@/assets/sino.png"
import { IconButton } from "./IconButton"
import { InputForm } from "./InputForm"
import { TabMenu } from "./TabMenu"
import { SignInButton } from "./SignInButton"

export const Header = () => {
  return (
    <header>
      <nav className="flex row bg-[#212233] backdrop-blur-[8px] py-2 items-center justify-between">
        <div className="flex row gap-[5px]">
          <TabMenu />
        </div>
        <InputForm image={Lupa} alt="lupa"/>
        <div className="flex row px-2 items-center justify-end gap-[10px] mr-[4px]">
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