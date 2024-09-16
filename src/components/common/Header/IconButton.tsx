'use client'

import Image from "next/image"; 
import { useEffect, useRef, useState } from "react";
import { ButCard } from "./ButPag";
import Close from "@/assets/close-icon.svg"

interface IconButtonProps {
    image: any,
    alt: string,
    children: any
}

export const IconButton = ({ image, alt, children }: IconButtonProps) => {
    const [isHidden, setIsHidden] = useState(true);
    const divRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (divRef.current && !divRef.current.contains(event.target as Node)) {
            setIsHidden(true);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <button
                className="hover:opacity-50 transition cursor-pointer bg-[#373952] p-2 rounded-full"
                onClick={() => setIsHidden(!isHidden)}
            >
                <Image src={image} alt={alt} width={20} height={20} />
            </button>
            {!isHidden && (
                <div className="w-[100vw] h-[100vh] top-[var(--header-height)] right-0 bg-black bg-opacity-70 fixed">
                    <div className="fixed w-[400px] calc-container-button rounded-md right-0 top-[calc(var(--header-height))] m-2 bg-[#212233]" ref={divRef}>
                        <ButCard title={alt} >
                            {children}
                        </ButCard>
                        <button className="absolute top-0 right-0 m-3 w-fit rounded-full hover:opacity-70 delay-100"
                        onClick={() => setIsHidden(true)}
                        >
                            <Image src={Close} alt="close-button" width={25}/>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}