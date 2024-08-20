import Image from "next/image";
import Menu from "@/assets/menu.png"
import Logo from "@/assets/logo.png"

export const TabMenu = () => {
    return(
        <>
            <button className="games-tab mx-1">
                <Image src={Menu} alt="abre" width={30} height={30} />
            </button>
            <div>
                <Image src={Logo} alt="logo" width={100} height={100} />
            </div>
        </>
    );
};