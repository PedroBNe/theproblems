import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface AsideItemProps {
  image: StaticImageData
  text: string
  link: string
}

export const AsideItem = ({ image, text, link }: AsideItemProps) => {
  return (
    <Link href={link}>
      <div className="flex h-9 items-center border-l-[6px] border-solid border-l-transparent pl-3 py-2">
        <Image src={image} alt="Icon" width={25} height={25} className="flex justify-center" />
        <p className="text-white pl-3 text-[15px] overflow-hidden whitespace-nowrap font-black max-w-[120px] text-ellipsis">{text}</p>
      </div>
    </Link>
  )
}