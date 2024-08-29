import { CarouselPage } from "@/components/carousel/page";

export default function Home() {
  return (
    <div className="pl-2 ">
      <CarouselPage title="Continuar jogando" />
      <CarouselPage title="Novos Jogos" />
      <CarouselPage title="Jogos .io" />
      <CarouselPage title="Jogos Casuais" />
      <CarouselPage title="Jogos de dirigir" />
      <CarouselPage title="Jogos de ação" />
      <CarouselPage title="Jogos de aventura" />
      <CarouselPage title="Jogos de clicar" />
    </div>
  );
}
3