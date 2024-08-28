import Image from "next/image"

interface Sites {
  image: any,
  alt: string,
}

export const Sites = ({ image, alt }: Sites) => {
  return (
    <div className="flex w-fit p-2 hover:opacity-85 transition cursor-pointer bg-[#12121a] hover:border-[#2e2e53] border-2 border-transparent rounded-full justify-center items-center ">
      <Image src={image} alt={alt} width={25} height={25} />
    </div>
  )
}