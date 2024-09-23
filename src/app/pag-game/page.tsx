'use client'

import { useEffect, useState } from "react"
import React from "react";
import PagLarge from "./LaptopL";
import PagLaptop from "./Laptop.";
import PagTablet from "./Tablet";
import PagMobile from "./Mobile";

export default function GameTab() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
        });
      }, 100);
    };

    handleResize(); // Pega o tamanho da tela na montagem

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Laptop L or higher
  if(windowSize.width >= 1440) {
    return(<PagLarge />)
  }

  // Laptop
  if(windowSize.width >= 1024) {
    return(<PagLaptop />)
  }

  // Tablet
  if(windowSize.width >= 426) {
    return(<PagTablet />)
  }

  // Mobile
  if(windowSize.width < 426) {
    return(<PagMobile />)
  }
}
