import { montserrat } from "./ui/fonts";
export default function Footer() {
  return (
    <footer className={`text-center text-white ${montserrat.className} mt-12`}>
      <h1>Hecho con 💚 by Az1n</h1>
      <h2>Agradecimientos a Midudev por la clase</h2>
    </footer>
  );
}
