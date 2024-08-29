import Image from "next/image"

interface Sites {
  image: any,
  alt: string,
}

export const Sites = ({ image, alt }: Sites) => {
  return (
    <div className="flex w-fit p-2 hover:opacity-85 transition cursor-pointer bg-transparent hover:bg-[#38238b] border-[#424277] border-2 border-transparent rounded-full justify-center items-center ">
      <Image src={image} alt={alt} width={20} />
    </div>
  )
}