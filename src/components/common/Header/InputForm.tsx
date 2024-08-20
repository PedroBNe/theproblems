import Image from "next/image";

interface InputFormProps {
    image: any,
    alt: string
}

export const InputForm = ({ image, alt }: InputFormProps) => {
    return(
        <form className="flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <input placeholder="Search" className="block w-[460px] h-[40px] m-auto rounded-[30px] bg-[#373952] border-solid font-bold text-[16px] text-[#AAADBE] pl-[16px] border-transparent outline-none"></input>
            <div className="text-[#8D8F9E] flex text-center absolute justify-center top-[10px] right-[15px]">
                <Image src={image} alt={alt} width={20} height={20} />  
            </div>
        </form>
    );
};