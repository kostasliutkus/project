import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Products } from "../products/products";
import { NavBar } from "../navBar/navBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Buy Games, Gift Cards & Top Ups Cheaper" },
    { name: "description", content: "Eneba — the fastest-growing marketplace for gamers. Get games and gift cards for PC, PlayStation, Xbox, Nintendo in safe and affordable way. Eneba way." },
  ];
}

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Products />
    </div>
    );
}
