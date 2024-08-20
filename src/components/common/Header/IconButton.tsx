import Image from "next/image"; 

interface IconButton {
    image: any,
    alt: string
}

export const IconButton = ({ image, alt }: IconButton) => {
    return(
        <>
            <div className="cursor-pointer bg-[#373952] p-2 rounded-full">
                <Image src={image} alt={alt} width={20} height={20} />
            </div>
        </>
    );
}