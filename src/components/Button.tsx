import Image, { StaticImageData } from "next/image";

interface ButtonProps {
    text: string
    image?: StaticImageData
}

export const Button = ({ text, image }: ButtonProps) => {
    return (
        <button className="flex w-full justify-center items-center gap-2 bg-[#6842FF] text-white hover:bg-[#38238b] hover:text-opacity-90 cursor-pointer transition font-extrabold p-2 rounded-full px-6">
            {image && <Image src={image.src} alt={text} className="w-5 h-5" width={20} height={20} />}
            <p>{text}</p>
        </button>
    );
};