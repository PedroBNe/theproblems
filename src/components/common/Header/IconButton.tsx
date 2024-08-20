import Image from "next/image"; 

interface IconButtonProps {
    image: any,
    alt: string
}

export const IconButton = ({ image, alt }: IconButtonProps) => {
    return(
        <>
            <div className="hover:opacity-50 transition cursor-pointer bg-[#373952] p-2 rounded-full">
                <Image src={image} alt={alt} width={20} height={20} />
            </div>
        </>
    );
}