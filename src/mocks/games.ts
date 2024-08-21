import { ApiGame } from "@/services/api/games";
import { randomUUID } from "crypto";

export const GAME_MOCK: ApiGame[] = [
  {
    id: randomUUID(),
    name: "Game 1",
    description: "Game 1 description",
    image: "https://via.placeholder.com/150",
    route: "/game/1",
  },
];
