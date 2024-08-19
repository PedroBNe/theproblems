import Image from "next/image"
import Logo from "@/assets/logo.png"

export const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <Image src={Logo} alt="logo" width={100} height={100} />
        </div>
        <div></div>
      </nav>
    </header>
  )
}