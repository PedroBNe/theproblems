import Image from "next/image";
// import ExpandsLeft from "@/assets/expands-left.svg"
import ExpandsRight from "@/assets/expands-right.svg"
import Logo from "@/assets/logo.png"

export const TabMenu = () => {
    return(
        <>
            <button className="mx-[14px] hover:opacity-50 transition">
                {/* <Image src={ExpandsLeft} alt="open" width={30} height={30} /> */}
                <Image src={ExpandsRight} alt="close" width={30} height={30} />
            </button>
            <div>
                <Image src={Logo} alt="logo" width={100} height={100} />
            </div>
        </>
    );
};