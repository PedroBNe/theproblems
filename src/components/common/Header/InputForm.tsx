import Image from "next/image";

interface InputForm {
    image: any,
    alt: string
}

export const InputForm = ({ image, alt }: InputForm) => {
    return(
        <form className="input-bar">
            <input placeholder="Search" className="input"></input>
            <div className="lupa">
                <Image src={image} alt={alt} width={20} height={20} />  
            </div>
        </form>
    );
};